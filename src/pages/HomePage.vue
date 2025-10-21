<template>
  <div class="home-page min-h-screen bg-gradient-to-br from-ssi-dark via-ssi-dark-lighter to-ssi-dark">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-ssi-dark/80 backdrop-blur-lg border-b border-ssi-gray z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-gradient">100DaysOf</span>
          </div>
          <div class="flex space-x-4">
            <router-link to="/programmes" class="text-ssi-text-dim hover:text-ssi-text transition">
              Programmes
            </router-link>
            <router-link to="/progress" class="text-ssi-text-dim hover:text-ssi-text transition">
              Progress
            </router-link>
            <router-link to="/chat" class="btn-primary px-4 py-2 text-sm">
              Start Learning
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <!-- Animated logo/icon -->
        <div class="mb-8 floating">
          <div class="w-32 h-32 mx-auto bg-gradient-to-br from-ssi-red to-ssi-red-light rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-6xl">🗣️</span>
          </div>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-gradient">100 Days</span>
          <span class="text-ssi-text"> to Confidence</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-ssi-text-dim mb-8 max-w-3xl mx-auto">
          Become interactionally confident in 100 days with daily sessions, structured programmes, and the revolutionary SaySomethingIn method.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <router-link to="/programmes" class="btn-primary text-lg px-8 py-4">
            Choose Your Language
          </router-link>
          <button @click="tryMasterCast" class="btn-secondary text-lg px-8 py-4">
            Try a £5 MasterCast
          </button>
        </div>

        <!-- Trust badges -->
        <div class="flex flex-wrap justify-center gap-8 text-ssi-text-dim">
          <div class="flex items-center gap-2">
            <span class="text-ssi-red">✓</span>
            <span>10,000+ Success Stories</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-ssi-red">✓</span>
            <span>15+ Languages</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-ssi-red">✓</span>
            <span>Natural Method</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Programme Cards -->
    <section class="py-20 px-4 bg-ssi-dark-lighter/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">
          Choose Your <span class="text-gradient">100 Day Journey</span>
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Welsh Programme -->
          <div class="card-dark hover:border-ssi-red transition-all duration-300 cursor-pointer" @click="selectProgramme('welsh')">
            <div class="text-4xl mb-4">🏴󐁧󐁢󐁷󐁬󐁳󐁿</div>
            <h3 class="text-2xl font-bold mb-2 text-ssi-text">100 Days of Welsh</h3>
            <p class="text-ssi-text-dim mb-4">
              Master conversational Welsh with our most popular programme
            </p>
            <div class="text-3xl font-bold text-gradient mb-4">£100</div>
            <ul class="space-y-2 text-sm text-ssi-text-dim">
              <li>✓ Daily coaching messages</li>
              <li>✓ SSi app access</li>
              <li>✓ Progress tracking</li>
              <li>✓ Community support</li>
            </ul>
          </div>

          <!-- Spanish Programme -->
          <div class="card-dark hover:border-ssi-red transition-all duration-300 cursor-pointer" @click="selectProgramme('spanish')">
            <div class="text-4xl mb-4">🇪🇸</div>
            <h3 class="text-2xl font-bold mb-2 text-ssi-text">100 Days of Spanish</h3>
            <p class="text-ssi-text-dim mb-4">
              Speak Spanish confidently in just 100 days
            </p>
            <div class="text-3xl font-bold text-gradient mb-4">£100</div>
            <ul class="space-y-2 text-sm text-ssi-text-dim">
              <li>✓ Daily coaching messages</li>
              <li>✓ SSi app access</li>
              <li>✓ Progress tracking</li>
              <li>✓ Community support</li>
            </ul>
          </div>

          <!-- Chinese Programme -->
          <div class="card-dark hover:border-ssi-red transition-all duration-300 cursor-pointer" @click="selectProgramme('chinese')">
            <div class="text-4xl mb-4">🇨🇳</div>
            <h3 class="text-2xl font-bold mb-2 text-ssi-text">100 Days of Chinese</h3>
            <p class="text-ssi-text-dim mb-4">
              Break through the complexity with our structured approach
            </p>
            <div class="text-3xl font-bold text-gradient mb-4">£100</div>
            <ul class="space-y-2 text-sm text-ssi-text-dim">
              <li>✓ Daily coaching messages</li>
              <li>✓ SSi app access</li>
              <li>✓ Progress tracking</li>
              <li>✓ Community support</li>
            </ul>
          </div>
        </div>

        <!-- Monthly Coaching Option -->
        <div class="mt-12 text-center">
          <div class="card-dark max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold mb-4">
              Prefer ongoing support?
            </h3>
            <p class="text-ssi-text-dim mb-4">
              Get continuous coaching for just £1 per day
            </p>
            <div class="text-3xl font-bold text-gradient mb-4">
              £30/month
            </div>
            <router-link to="/programmes" class="btn-primary">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">
          How <span class="text-gradient">100 Days</span> Works
        </h2>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-ssi-red rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h4 class="font-bold mb-2">Choose Your Language</h4>
            <p class="text-ssi-text-dim text-sm">
              Pick from 15+ languages
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-ssi-red rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h4 class="font-bold mb-2">Daily Coaching</h4>
            <p class="text-ssi-text-dim text-sm">
              Get personalized guidance every day
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-ssi-red rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h4 class="font-bold mb-2">Practice Naturally</h4>
            <p class="text-ssi-text-dim text-sm">
              Learn through speaking, not studying
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-ssi-red rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h4 class="font-bold mb-2">Gain Confidence</h4>
            <p class="text-ssi-text-dim text-sm">
              Have real conversations after 100 days
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-ssi-gray">
      <div class="max-w-6xl mx-auto text-center text-ssi-text-dim">
        <p>&copy; 2024 SaySomethingIn. Transforming language learning.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const selectProgramme = (language: string) => {
  localStorage.setItem('selectedLanguage', language)
  router.push('/checkout')
}

const tryMasterCast = () => {
  // Navigate to MasterCast booking
  router.push('/chat')
}
</script>

<style scoped>
/* Additional animations and effects */
.card-dark:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(220, 38, 38, 0.1);
}
</style>