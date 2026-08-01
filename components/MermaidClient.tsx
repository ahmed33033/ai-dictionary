'use client'

import mermaid from 'mermaid'
import { useEffect } from 'react'

export function MermaidClient({ diagramSrcCode }: { diagramSrcCode: string }) {
    useEffect(() => {
        mermaid.run()
    }, [])
    return <pre className="mermaid">{diagramSrcCode}</pre>
}
