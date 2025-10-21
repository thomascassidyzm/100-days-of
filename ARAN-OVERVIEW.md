# 100DaysOf - Expert Coaching Companion for SSi Learners
**Managed Learning Coach System + AI Voice Practice Sessions**

---

## The Vision

**A managed learning coach system that works ALONGSIDE the SSi app** - providing expert coaching, structure, accountability, and unlimited AI voice practice sessions.

**Critical Positioning:**
- **SSi App = THE MAIN PRODUCT** (audio lessons, methodology, core learning)
- **100DaysOf = EXPERT COACH COMPANION** (managed schedule, accountability, practice coaching)

**What This Is:**
A **managed learning coach system** that provides:
- **Expert coaching** on your SSi learning journey
- **Structured schedule** (30/60/90/100 day plans)
- **AI voice practice sessions** (conversational practice using learned vocabulary)
- **Progress tracking** (accountability and motivation)
- **Spaced repetition coaching** (optimize retention)

**What This Is NOT:**
This does NOT replace the SSi app or audio lessons. Learners still use SSi as their primary learning tool. We provide the coaching layer that helps them succeed.

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

### **SSi App (THE MAIN PRODUCT - Unchanged):**
Proven audio lessons → Learn building blocks → Practice methodology → Core teaching

### **100DaysOf Expert Coach Companion (ADDITIONAL LAYER):**
- **Managed learning schedule** (30/60/90/100 day coaching plans)
- **AI voice practice sessions** (24/7 conversational practice coach)
- **Expert progress coaching** (accountability, motivation, tracking)
- **Spaced repetition coaching** (optimize retention)

**Together:** SSi app teaches + 100DaysOf coaches = Complete managed learning system

**Key Coaching Advantages:**
- **Expert guidance** - Structured learning path keeps learners on track
- **Always available** - AI practice coach available 24/7, no scheduling
- **Personalized coaching** - 30/60/90/100 day plans match learner goals
- **Voice practice sessions** - Build actual speaking confidence
- **Bounded vocabulary** - Coach only uses phrases from SSi lessons
- **Emotional encouragement** - Hume.ai voices adapt tone (encouraging, celebratory, supportive)
- **Managed accountability** - Daily sessions, streak tracking, progress monitoring

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
