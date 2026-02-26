import { NextResponse } from 'next/server'
import { fetchGitHubData } from '@/lib/github-data'

export async function GET() {
  try {
    const result = await fetchGitHubData('experience.json', {    
      revalidate: 300 // 5 minutos
    })

    if (result.error) {
      console.error('Error fetching experience data from GitHub:', result.error)
      return NextResponse.json(
        { error: 'Failed to load experience data from GitHub' },
        { status: 500 }
      )
    }

    return NextResponse.json(result.data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'Last-Modified': result.lastModified || new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('Error in experience API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
