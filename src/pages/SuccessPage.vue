<template>
  <div class="min-h-screen bg-gradient-to-br from-ssi-dark via-ssi-dark-lighter to-ssi-dark flex items-center justify-center px-4">
    <div class="max-w-2xl w-full">
      <!-- Success animation -->
      <div class="text-center mb-8">
        <div class="w-32 h-32 mx-auto bg-gradient-to-br from-ssi-red to-ssi-red-light rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
          <span class="text-6xl">🎉</span>
        </div>
        
        <h1 class="text-4xl font-bold mb-4">
          Welcome to Your 100 Day Journey!
        </h1>
        
        <p class="text-xl text-ssi-text-dim">
          Your {{ purchase?.language }} learning adventure starts now
        </p>
      </div>

      <!-- Next Steps -->
      <div class="card-dark mb-6">
        <h2 class="text-2xl font-bold mb-6 text-gradient">
          Your Next Steps:
        </h2>
        
        <div class="space-y-6">
          <!-- Step 1: Check Email -->
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-ssi-red rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold">1</span>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Check your email</h3>
              <p class="text-ssi-text-dim text-sm mb-3">
                We've sent your SSi app access link to <strong>{{ purchase?.email }}</strong>
              </p>
              <div class="bg-ssi-dark p-4 rounded-lg border border-ssi-gray">
                <p class="text-xs text-ssi-text-dim mb-2">Your magic link:</p>
                <code class="text-sm text-ssi-red break-all">
                  {{ purchase?.magicLink }}
                </code>
                <button 
                  @click="copyLink"
                  class="btn-secondary mt-3 text-sm py-2 px-4"
                >
                  {{ copied ? '✓ Copied!' : 'Copy Link' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Step 2: Join App -->
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-ssi-red rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold">2</span>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Open the SSi app</h3>
              <p class="text-ssi-text-dim text-sm mb-3">
                Click your magic link to instantly access all {{ purchase?.language }} content for 100 days
              </p>
              <div class="flex gap-3">
                <a 
                  :href="purchase?.magicLink"
                  target="_blank"
                  class="btn-primary text-sm py-2 px-4"
                >
                  Open SSi App →
                </a>
                <button class="btn-secondary text-sm py-2 px-4">
                  Download App
                </button>
              </div>
            </div>
          </div>

          <!-- Step 3: Join Group -->
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-ssi-red rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold">3</span>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Join your coaching group</h3>
              <p class="text-ssi-text-dim text-sm mb-3">
                Get daily coaching and connect with fellow learners
              </p>
              <div class="flex gap-3">
                <button class="btn-secondary text-sm py-2 px-4">
                  Join WhatsApp Group
                </button>
                <button class="btn-secondary text-sm py-2 px-4">
                  Join Telegram Group
                </button>
              </div>
            </div>
          </div>

          <!-- Step 4: Start Learning -->
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-ssi-red rounded-full flex items-center justify-center flex-shrink-0">
              <span class="font-bold">4</span>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Start your first session!</h3>
              <p class="text-ssi-text-dim text-sm">
                Begin with Lesson 1 - just 10 minutes to your first {{ purchase?.language }} sentences
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Access Details -->
      <div class="card-dark">
        <h3 class="font-semibold mb-4">Your Access Details</h3>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-ssi-text-dim">Programme:</span>
            <span>100 Days of {{ purchase?.language }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-ssi-text-dim">Start Date:</span>
            <span>{{ formatDate(purchase?.startDate) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-ssi-text-dim">End Date:</span>
            <span>{{ formatDate(purchase?.endDate) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-ssi-text-dim">Days Remaining:</span>
            <span class="text-ssi-red font-bold">100 days</span>
          </div>
        </div>
      </div>

      <!-- Support -->
      <div class="text-center mt-8 text-ssi-text-dim text-sm">
        <p>Need help? Email us at support@saysomethingin.com</p>
        <p class="mt-2">
          <router-link to="/progress" class="text-ssi-red hover:text-ssi-red-light">
            Track your progress →
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Purchase {
  email: string
  name: string
  language: string
  magicLink: string
  startDate: string
  endDate: string
  messagingUsername?: string
}

const purchase = ref<Purchase | null>(null)
const copied = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('purchase')
  if (stored) {
    purchase.value = JSON.parse(stored)
  }
})

const formatDate = (dateString?: string) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const copyLink = () => {
  if (purchase.value?.magicLink) {
    navigator.clipboard.writeText(purchase.value.magicLink)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>