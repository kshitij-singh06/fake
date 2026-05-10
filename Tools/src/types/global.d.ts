// Global type declarations for TruthScan

declare global {
  interface Window {
    truthScanInspector?: any
  }
}

// Chrome extension types
declare namespace chrome {
  namespace runtime {
    const onMessage: any
    const sendMessage: any
    const onInstalled: any
  }

  namespace storage {
    namespace local {
      function get(keys: string | string[] | null, callback: (result: any) => void): void
      function set(items: any, callback?: () => void): void
      function remove(keys: string | string[], callback?: () => void): void
    }
  }

  namespace action {
    const onClicked: any
  }

  namespace tabs {
    const sendMessage: any
  }
}

export {}