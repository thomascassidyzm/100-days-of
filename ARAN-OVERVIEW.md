# 100DaysOf Language Learning Platform
**Accelerated Conversational Confidence Using SaySomethingIn Methodology + AI Voice Coach**

---

## The Vision

**A managed companion service that sits ALONGSIDE the main SSi course** - providing structure, accountability, and unlimited AI practice to help learners achieve interactional confidence in 30, 60, 90, or 100 days.

**Critical:** This does NOT replace SSi courses. This is an **ADDITIONAL service** that:
- Provides a managed learning schedule (30/60/90/100 day structure)
- Adds AI voice coaching for unlimited practice
- Tracks progress and maintains accountability
- Complements SSi audio lessons with conversational practice

**Core Insight:** Learners still use SSi's proven method and audio lessons. We add the extra layer of managed coaching, practice, and accountability that helps them stay on track and practice what they're learning.

---

## How It Works

### 1. **Prescriptive Daily Curriculum** (Parametrisable)

The 668 canonical SEEDS from SSi course production are distributed across the chosen duration:

| Duration | Seeds/Day | Pace | Target User |
|----------|-----------|------|-------------|
| **30 days** | 22 | Intensive | Sprint learners |
| **60 days** | 11 | Balanced | Standard immersion |
| **90 days** | 7 | Gentle | More consolidation |
| **100 days** | 7 | Relaxed | Built-in review days |

Each day, the system:
- **Introduces new SEEDS** (e.g., Day 15 → SEEDS 155-165)
- **Reviews previous material** using spaced repetition
- **Unlocks conversational practice** with AI coach

### 2. **AI Voice Coach** (The Innovation)

**Claude Sonnet 4.5** acts as a conversational practice partner, but with critical constraints:

✅ **ONLY uses phrases from learned SEEDS**
✅ **Voice-first** (Hume.ai emotional TTS + Web Speech API for input)
✅ **Natural conversation** within vocabulary boundaries
✅ **Gentle correction** and encouragement

**Example (Day 15 of Spanish):**
```
Coach: "¡Hola! ¿Quieres hablar español hoy?"
User: "Sí, quiero hablar"
Coach: "¡Perfecto! ¿Qué quieres hacer?"
User: "Quiero aprender más"
Coach: "¡Muy bien! Hoy vamos a practicar..."
```

If learner tries to say something beyond their current level → Coach guides them back: *"Try using what you know..."*

### 3. **Integration with SSi Course Production**

The platform uses your existing course generation infrastructure:

```
SSi Dashboard (automation_server.cjs)
  ↓
VFS: /vfs/courses/spa_for_eng_speakers/
  ↓
- translations.json  (668 SEED_PAIRS)
- baskets.json       (LEGO_PAIRS - building blocks)
  ↓
100DaysOf Platform
  ↓
Daily curriculum calculated → AI coach loaded with vocabulary → Voice practice
```

**Zero duplication of content.** The SSi Dashboard remains the single source of truth for course content.

---

## The User Journey

1. **Onboarding** (2 minutes)
   - Select language (Spanish, Chinese, Irish, French...)
   - Choose duration (30/60/90/100 days)
   - Test microphone & voice synthesis
   - Subscribe: **£100 for course** → **£30/month ongoing**

2. **Daily Practice** (10-20 minutes/day)
   - **New Material:** Coach introduces today's SEEDS with voice examples
   - **Conversational Practice:** Natural dialogue using full vocabulary
   - **Voice-first:** Learner speaks, coach responds in target language
   - **Complete Session → Unlock tomorrow**

3. **Progress Dashboard**
   - 100-day calendar (visual progress)
   - Streak tracking
   - Vocabulary count
   - Statistics & insights

---

## Why This Is Revolutionary

### **SSi Core Method (Unchanged):**
Structured audio lessons → Learn building blocks → Practice methodology

### **100DaysOf Companion Service (NEW LAYER):**
- **Managed schedule** (30/60/90/100 day plan)
- **AI practice coach** (24/7 conversational practice)
- **Progress tracking** (accountability and motivation)
- **Spaced repetition** (optimize retention)

**Together:** SSi teaching method + 100DaysOf managed practice = Complete learning system

**Key Advantages:**
- **Always available** - no scheduling, no time zones
- **Personalized pacing** - 30/60/90/100 day options
- **Voice-first** - builds actual speaking confidence
- **Bounded vocabulary** - coach never confuses learner with unknown phrases
- **Emotional encouragement** - Hume.ai voices adapt tone (encouraging, celebratory, supportive)
- **Scales infinitely** - one AI coach serves unlimited learners

---

## Technical Architecture (High-Level)

**Frontend:** Vue 3 + TypeScript + Tailwind CSS
**Voice Synthesis:** Hume.ai (emotional TTS)
**Voice Input:** Web Speech API (STT)
**AI Coach:** Claude Sonnet 4.5 (conversational intelligence)
**Course Content:** SSi Dashboard VFS (your existing system)
**Hosting:** Vercel (serverless, global CDN)

**APML Specification:** Complete Single Source of Truth written (1,105 lines)
**Status:** Ready to build Interface Section 1 (Onboarding)

---

## Business Model

**Pricing:**
- **£100** - Full course access (30/60/90/100 days depending on choice)
- **£30/month** - Ongoing access after course completion (unlimited practice)

**Revenue Potential:**
- 1,000 learners × £100 = **£100,000** initial revenue
- 500 ongoing × £30/month = **£15,000/month recurring**

**Scaling:**
- AI coaching costs ~£0.10-0.20 per session (Claude API + Hume.ai)
- Marginal cost decreases as user base grows
- Same infrastructure serves Spanish, Chinese, Welsh, French...

---

## Next Steps

1. **Review & Approve** APML specification
2. **Build Onboarding Flow** (language selection, duration, payment)
3. **Build Daily Practice** (curriculum engine + voice coach)
4. **Beta Test** with 60-day Spanish course
5. **Launch** with marketing to existing SSi community

**Timeline:** 4-6 weeks to MVP (following APML spec)

---

## Why Now?

**Voice AI has reached the inflection point:**
- Claude Sonnet 4.5 can hold natural conversations
- Hume.ai provides emotionally-aware voices
- Web browsers support native speech recognition
- Mobile devices have excellent microphones

**The SSi methodology provides the constraint that makes it work:**
By limiting the AI to learned vocabulary, we ensure learners are never overwhelmed, always practicing exactly what they know, building genuine confidence.

**This is the future of language learning:** Methodology + unlimited practice.

---

**Questions? Let's discuss.**

---
*Document generated from complete APML v1.1.0 specification*
*100-days-of-language-learning.apml (1,105 lines)*
