// TruthScan — Frontend API client

export interface ScrapedData {
  url: string
  text: string
  images: string[]
}

export interface DetectionResult {
  textPreview: string
  aiLikelihoodPercent: number
}

export interface SupportingSource {
  title: string
  link: string
}

export interface FactCheckClaim {
  claim: string
  isLikelyTrue: boolean
  supportingSources: SupportingSource[]
}

export interface FactCheckResult {
  claims: FactCheckClaim[]
}

export interface SentimentResult {
  summary: string
}

export interface SummarizationResult {
  summary: string
  model: string
  input_length: number
  summary_length: number
}

export interface QAResult {
  question: string
  answer: string
  model: string
  content_length: number
  answer_length: number
}

export interface AISource {
  source: string
  confidence: number
}

export interface ImageDetectionResult {
  url: string
  aiLikelihoodPercent: number
  rawModelReply: string
  topSources?: AISource[]
}

export interface AnalysisResult {
  scrapedData: ScrapedData
  detectionResult: DetectionResult
  factCheckResult?: FactCheckResult
  sentimentResult?: SentimentResult
  summarizationResult?: SummarizationResult
  imageDetectionResults?: ImageDetectionResult[]
  timestamp: Date
}

class TruthScanClient {
  private readonly serverBase = 'http://localhost:5000'

  private trace(message: string, data?: unknown) {
    console.log(`[TruthScan API] ${message}`, data ?? '')
  }

  // Generic POST request builder — DRYs up all API calls
  private async buildPostRequest<T>(endpoint: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${this.serverBase}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json() as Promise<T>
  }

  async fetchPageContent(url: string): Promise<ScrapedData> {
    this.trace('Fetching page content:', url)
    try {
      const data = await this.buildPostRequest<ScrapedData>('/api/scrape', { url })
      this.trace(`Content fetched: ${data.text.length} chars`)
      return data
    } catch (err) {
      this.trace('Scrape error:', err)
      throw new Error(`Failed to fetch page content: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  async runAiDetection(text: string): Promise<DetectionResult> {
    this.trace('Running AI detection, length:', text.length)
    try {
      const data = await this.buildPostRequest<DetectionResult>('/api/detect', { text })
      this.trace('AI detection result:', data)
      return data
    } catch (err) {
      this.trace('AI detection error:', err)
      throw new Error(`Failed to run AI detection: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  async verifyFacts(text: string): Promise<FactCheckResult> {
    this.trace('Verifying facts, length:', text.length)
    try {
      const data = await this.buildPostRequest<FactCheckResult>('/api/factcheck', { text })
      this.trace('Fact-check result:', data)
      return data
    } catch (err) {
      this.trace('Fact-check error:', err)
      throw new Error(`Failed to verify facts: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  async getSentiment(text: string): Promise<SentimentResult> {
    this.trace('Getting sentiment, length:', text.length)
    try {
      const data = await this.buildPostRequest<SentimentResult>('/api/sentiment', { text })
      this.trace('Sentiment result:', data)
      return data
    } catch (err) {
      this.trace('Sentiment error:', err)
      throw new Error(`Failed to analyze sentiment: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  async generateSummary(text: string): Promise<SummarizationResult> {
    this.trace('Generating summary, length:', text.length)
    try {
      const data = await this.buildPostRequest<SummarizationResult>('/api/summarize', { content: text })
      this.trace('Summary result:', data)
      if (!(data as any).success) {
        throw new Error((data as any).error || 'Summarization failed')
      }
      return data
    } catch (err) {
      this.trace('Summarization error:', err)
      throw new Error(`Failed to generate summary: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  async queryContent(question: string, content: string): Promise<QAResult> {
    this.trace(`Querying content — Q: ${question.length} chars, content: ${content.length} chars`)
    try {
      const data = await this.buildPostRequest<QAResult>('/api/qa', { question, content })
      this.trace('Q&A result:', data)
      if (!(data as any).success) {
        throw new Error((data as any).error || 'Q&A failed')
      }
      return data
    } catch (err) {
      this.trace('Q&A error:', err)
      throw new Error(`Failed to query content: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  async analyzeImageAI(imageUrl: string): Promise<ImageDetectionResult> {
    this.trace('Analyzing image for AI:', imageUrl)
    try {
      const data = await this.buildPostRequest<any>('/api/image-detect-ai', { url: imageUrl })
      this.trace('Image detection result:', data)
      return {
        url: imageUrl,
        aiLikelihoodPercent: data.aiLikelihoodPercent,
        rawModelReply: data.rawModelReply,
        topSources: data.topSources,
      }
    } catch (err) {
      this.trace('Image detection error:', err)
      throw new Error(`Failed to analyze image: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  async batchAnalyzeImages(imageUrls: string[]): Promise<ImageDetectionResult[]> {
    this.trace('Batch image analysis, count:', imageUrls.length)
    if (!imageUrls || imageUrls.length === 0) return []

    const results: ImageDetectionResult[] = []
    for (const imageUrl of imageUrls) {
      try {
        results.push(await this.analyzeImageAI(imageUrl))
      } catch (err) {
        this.trace(`Image failed: ${imageUrl}`, err)
        const errMsg = err instanceof Error ? err.message : 'Unknown error'
        const isUnsupported =
          errMsg.includes('skipAnalysis') ||
          errMsg.includes('Unsupported image format') ||
          errMsg.includes('HTTP error! status: 400')
        results.push({
          url: imageUrl,
          aiLikelihoodPercent: 0,
          rawModelReply: isUnsupported ? 'This format is not supported' : `Analysis failed: ${errMsg}`,
        })
      }
    }
    return results
  }

  async fullPageAnalysis(url: string, withFactCheck = true): Promise<AnalysisResult> {
    this.trace('Full page analysis for:', url)
    try {
      const scrapedData = await this.fetchPageContent(url)
      const detectionResult = await this.runAiDetection(scrapedData.text)
      let factCheckResult: FactCheckResult | undefined
      if (withFactCheck) {
        factCheckResult = await this.verifyFacts(scrapedData.text)
      }
      return { scrapedData, detectionResult, factCheckResult, timestamp: new Date() }
    } catch (err) {
      this.trace('Full analysis failed:', err)
      throw err
    }
  }

  computeMisinfoScore(claims: FactCheckClaim[]): number {
    if (!claims || claims.length === 0) return 0
    const falseCount = claims.filter((c) => !c.isLikelyTrue).length
    return Math.round((falseCount / claims.length) * 100)
  }

  async checkServerAlive(): Promise<boolean> {
    this.trace('Checking server connectivity...')
    try {
      const response = await fetch(`${this.serverBase}/api/scrape`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: 'https://example.com' }),
      })
      this.trace('Server check status:', response.status)
      return response.ok
    } catch (err) {
      this.trace('Server check failed:', err)
      return false
    }
  }
}

export const truthScanClient = new TruthScanClient()

// Backward-compatible alias
export const apiService = truthScanClient