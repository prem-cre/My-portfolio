"use client"

import { RefreshCw } from "lucide-react"
import { useState, useEffect } from "react"

const CodingProfilesSection = () => {
  const [profiles, setProfiles] = useState([
    {
      platform: "LeetCode",
      username: "prem_code",
      logo: "/leetcode-logo.png",
      rating: "1400+", // Static rating
      solved: 0,
      maxSolved: 1000,
      link: "https://leetcode.com/u/prem_code/",
      loading: true,
    },
    {
      platform: "CodeChef",
      username: "geethanjali_73",
      logo: "/codechef-logo.png",
      rating: "3⭐(1631)", // Static rating
      solved: 0,
      maxSolved: 600,
      link: "https://codechef.com/users/geethanjali_73",
      loading: true,
    },
    {
      platform: "GeeksforGeeks",
      username: "geethanjali_37",
      logo: "/gfg-logo.png",
      rating: "1500+", // Static rating
      solved: 0,
      maxSolved: 600,
      link: "https://www.geeksforgeeks.org/user/geethanjali_37/",
      loading: true,
    },
  ])

  // Fetch LeetCode data - only get problem count
  const fetchLeetCodeData = async (username) => {
    try {
      const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
      if (!response.ok) throw new Error("Failed to fetch")
      const data = await response.json()

      return {
        solved: data.totalSolved || 0,
      }
    } catch (error) {
      console.error("LeetCode API error:", error)
      return null
    }
  }

  // Mock data for CodeChef - only problem count
  const fetchCodeChefData = async (username) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Return mock problem count - replace with actual API call when available
      return {
        solved: 150,
      }
    } catch (error) {
      console.error("CodeChef API error:", error)
      return null
    }
  }

  // Mock data for GeeksforGeeks - only problem count
  const fetchGFGData = async (username) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1200))

      // Return mock problem count - replace with actual API call when available
      return {
        solved: 200,
      }
    } catch (error) {
      console.error("GFG API error:", error)
      return null
    }
  }

  const updateProfile = (index, updates) => {
    setProfiles((prev) => prev.map((profile, i) => (i === index ? { ...profile, ...updates } : profile)))
  }

  const fetchAllData = async () => {
    // Reset loading states for problem counts only
    setProfiles((prev) => prev.map((profile) => ({ ...profile, loading: true, error: undefined })))

    // Process profiles sequentially
    for (let i = 0; i < profiles.length; i++) {
      const profile = profiles[i]

      try {
        let data = null

        switch (profile.platform) {
          case "LeetCode":
            data = await fetchLeetCodeData(profile.username)
            break
          case "CodeChef":
            data = await fetchCodeChefData(profile.username)
            break
          case "GeeksforGeeks":
            data = await fetchGFGData(profile.username)
            break
        }

        if (data) {
          updateProfile(i, {
            solved: data.solved,
            loading: false,
          })
        } else {
          updateProfile(i, {
            loading: false,
            error: "Failed to fetch data",
          })
        }
      } catch (error) {
        updateProfile(i, {
          loading: false,
          error: "Error fetching data",
        })
      }

      // Add small delay between API calls
      if (i < profiles.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }
  }

  useEffect(() => {
    // Use setTimeout to avoid setState during render
    const timer = setTimeout(() => {
      fetchAllData()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="coding-profiles" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center flex-1">Coding Profiles</h2>
          <button
            onClick={fetchAllData}
            className="ml-4 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            const percent = Math.min((profile.solved / profile.maxSolved) * 100, 100)
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-border h-full hover:border-primary flex flex-col items-center text-center glow-card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={profile.logo || "/placeholder.svg?height=40&width=40"}
                    alt={profile.platform + " logo"}
                    className="h-10 w-10 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-primary">{profile.platform}</h3>
                </div>
                <div className="text-sm text-muted-foreground mb-2">@{profile.username}</div>
                <div className="space-y-2 w-full">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Problems Solved</span>
                    <span className="text-primary font-medium">
                      {profile.loading ? (
                        <RefreshCw className="w-4 h-4 animate-spin inline" />
                      ) : profile.error ? (
                        <span className="text-red-500">Error</span>
                      ) : (
                        profile.solved
                      )}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-primary transition-all duration-300" style={{ width: `${percent}%` }} />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Rating</span>
                    <span className="text-primary font-medium">{profile.rating}</span>
                  </div>
                </div>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
                >
                  Visit Profile
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Default export
export default CodingProfilesSection

// Named export (if you prefer named imports)
export { CodingProfilesSection }
