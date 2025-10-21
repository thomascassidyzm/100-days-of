<template>
  <div class="min-h-screen bg-gradient-to-br from-ssi-dark via-ssi-dark-lighter to-ssi-dark py-20">
    <div class="max-w-2xl mx-auto px-4">
      <!-- Product Summary -->
      <div class="card-dark mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-3xl font-bold mb-2">
              100 Days of {{ selectedLanguage }}
            </h1>
            <p class="text-ssi-text-dim">
              Start your journey to conversational confidence
            </p>
          </div>
          <div class="text-4xl">
            {{ languageEmojis[selectedLanguage] }}
          </div>
        </div>

        <div class="border-t border-ssi-gray pt-6">
          <h3 class="font-semibold mb-4">What you get:</h3>
          <ul class="space-y-3 text-ssi-text-dim">
            <li class="flex items-start gap-2">
              <span class="text-ssi-red mt-1">✓</span>
              <span>100 days of full SSi app access for {{ selectedLanguage }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-ssi-red mt-1">✓</span>
              <span>Daily coaching messages in WhatsApp/Telegram group</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-ssi-red mt-1">✓</span>
              <span>Structured programme with clear milestones</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-ssi-red mt-1">✓</span>
              <span>Community support from fellow learners</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-ssi-red mt-1">✓</span>
              <span>Option to continue or try new language after 100 days</span>
            </li>
          </ul>
        </div>

        <div class="border-t border-ssi-gray mt-6 pt-6">
          <div class="flex justify-between items-center mb-6">
            <span class="text-xl">Total:</span>
            <span class="text-3xl font-bold text-gradient">£100</span>
          </div>
        </div>
      </div>

      <!-- Payment Form -->
      <div class="card-dark">
        <h2 class="text-xl font-bold mb-6">Complete your purchase</h2>
        
        <form @submit.prevent="handleCheckout" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input 
              v-model="email"
              type="email"
              required
              placeholder="your@email.com"
              class="input-dark w-full"
            />
            <p class="text-xs text-ssi-text-dim mt-1">
              We'll send your SSi app access link here
            </p>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Name</label>
            <input 
              v-model="name"
              type="text"
              required
              placeholder="Your name"
              class="input-dark w-full"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">
              WhatsApp/Telegram Username (optional)
            </label>
            <input 
              v-model="messagingUsername"
              type="text"
              placeholder="@username or phone number"
              class="input-dark w-full"
            />
            <p class="text-xs text-ssi-text-dim mt-1">
              For daily coaching group invite
            </p>
          </div>

          <button 
            type="submit" 
            :disabled="processing"
            class="btn-primary w-full py-4 text-lg font-semibold disabled:opacity-50"
          >
            <span v-if="!processing">
              Pay £100 - Start Learning Today
            </span>
            <span v-else>
              Processing...
            </span>
          </button>

          <p class="text-xs text-center text-ssi-text-dim">
            Secure payment via Stripe. Cancel anytime within first 7 days for full refund.
          </p>
        </form>
      </div>

      <!-- Trust badges -->
      <div class="mt-8 flex justify-center gap-6 text-ssi-text-dim text-sm">
        <span>🔒 Secure checkout</span>
        <span>💳 Powered by Stripe</span>
        <span>✨ Instant access</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedLanguage = ref('Welsh')
const email = ref('')
const name = ref('')
const messagingUsername = ref('')
const processing = ref(false)

const languageEmojis: Record<string, string> = {
  'Welsh': '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
  'Spanish': '🇪🇸',
  'Chinese': '🇨🇳',
}

onMounted(() => {
  const lang = localStorage.getItem('selectedLanguage')
  if (lang) {
    selectedLanguage.value = lang.charAt(0).toUpperCase() + lang.slice(1)
  }
})

const handleCheckout = async () => {
  processing.value = true
  
  // This would integrate with Stripe
  // For now, simulate the flow
  setTimeout(() => {
    // After successful payment:
    // 1. Generate magic link
    const accessCode = Math.random().toString(36).substring(2, 15)
    const magicLink = `https://app.saysomethingin.com/100days/${selectedLanguage.value.toLowerCase()}/${accessCode}`
    
    // 2. Store purchase details
    const purchase = {
      email: email.value,
      name: name.value,
      language: selectedLanguage.value,
      magicLink,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 100 * 24 * 60 * 60 * 1000).toISOString(),
      messagingUsername: messagingUsername.value
    }
    
    localStorage.setItem('purchase', JSON.stringify(purchase))
    
    // 3. Redirect to success page
    router.push('/success')
  }, 2000)
}
</script>