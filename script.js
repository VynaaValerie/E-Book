/* ===================================================
   FINDING YOUR VOICE — Open Book 3D Engine
   =================================================== */
(function () {
  'use strict';

  /* ─────────────────────────────────────────────────
     SPREAD CONTENT DATA
     Each spread has { left: htmlString, right: htmlString, label: string }
  ───────────────────────────────────────────────── */
  const spreads = [

    /* ── SPREAD 0: COVER ── */
    {
      label: 'Cover',
      left: `
        <div class="cover-left">
          <img src="/images/photo-mic.jpg" class="cover-illus" alt="Student finding their voice" />
          <div class="cover-back-text">
            <p>"I got the eye of the tiger,<br/>a fighter, dancing through the fire."</p>
            <div class="cover-wave">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>`,
      right: `
        <div class="cover-right">
          <div class="cover-right-bg"></div>
          <div class="cover-spine-dec"></div>
          <div class="c-grade">Grade 12 — English</div>
          <div class="c-deco-lines">
            <div class="c-line"></div>
            <div class="c-line s"></div>
          </div>
          <h1 class="c-title">Finding<br/><em>Your</em><br/>Voice</h1>
          <p class="c-sub">Songs, Identity &amp; Resilience</p>
          <div class="c-divider"></div>
          <p class="c-unit">Module 1 — Unit 1</p>
          <button class="c-cta" id="openBookBtn">Open Book</button>
        </div>`
    },

    /* ── SPREAD 1: UNIT OPENER + WARM-UP ── */
    {
      label: 'Unit Opener & Warm-Up',
      left: `
        <div class="p-band band-gold">
          <span class="p-tag">Unit Opener</span>
          <span class="p-num">01</span>
        </div>
        <img src="/images/photo-music.jpg" class="pg-illus" alt="Students enjoying music" />
        <div class="p-body">
          <h2 class="h1">What Will You Learn?</h2>
          <p class="lead">By the end of this unit, you will be able to:</p>
          <div class="icon-list">
            <div class="il-item"><div class="il-dot" style="background:#8B5CF6"></div>Analyze figurative language in songs</div>
            <div class="il-item"><div class="il-dot" style="background:#7C3AED"></div>Interpret implicit &amp; symbolic meanings</div>
            <div class="il-item"><div class="il-dot" style="background:#E05A7A"></div>Express &amp; defend opinions critically</div>
            <div class="il-item"><div class="il-dot" style="background:#2BBFA4"></div>Write an analytical exposition text</div>
            <div class="il-item"><div class="il-dot" style="background:#A78BFA"></div>Present ideas with confidence</div>
          </div>
          <div class="accent-block ab-indigo">
            <div class="small-cap" style="margin-bottom:6px">Lead-In — Finding Your Voice</div>
            <p style="font-size:11.5px;line-height:1.6;color:#1C1A2E">Before we succeed, we often need courage to speak up. Think about moments like standing up against a bully, sharing a different opinion, or asking for help when struggling.</p>
          </div>
          <div class="pill-row">
            <div class="pill pill-indigo">Speaking up</div>
            <div class="pill pill-rose">Facing fear</div>
            <div class="pill pill-teal">Identity</div>
            <div class="pill pill-gold">Resilience</div>
          </div>
        </div>`,
      right: `
        <div class="p-band band-indigo">
          <span class="p-tag">Warm-Up</span>
          <span class="p-num">02</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Think — Pair — Share</h2>
          <p class="lead">Discuss these with a partner honestly — there are no wrong answers.</p>
          <div class="field-row">
            <span class="field-label">1. Why are people afraid to "rock the boat"?</span>
            <textarea class="fi" rows="2" placeholder="Write your thoughts..."></textarea>
          </div>
          <div class="field-row">
            <span class="field-label">2. Is confidence a talent or a skill you learn?</span>
            <textarea class="fi" rows="2" placeholder="Write your thoughts..."></textarea>
          </div>
          <div class="field-row">
            <span class="field-label">3. What does "finding your voice" mean to you?</span>
            <textarea class="fi" rows="2" placeholder="Write your thoughts..."></textarea>
          </div>
          <div class="accent-block ab-teal" style="font-size:11.5px">
            <strong>Tip:</strong> Tone is the singer's attitude. Mood is the feeling the listener gets. Keep both in mind as you listen.
          </div>
        </div>`
    },

    /* ── SPREAD 2: LISTENING ROAR + LYRICS ── */
    {
      label: 'Listening — Roar',
      left: `
        <div class="p-band band-rose">
          <span class="p-tag">Listening — Part 1</span>
          <span class="p-num">03</span>
        </div>
        <img src="/images/photo-tiger.jpg" class="pg-illus" alt="Eye of the tiger" />
        <div class="p-body">
          <h2 class="h2">Activity 1: Listen &amp; Analyze</h2>
          <div class="song-card sc-rose">
            <div class="sc-wave">
              <div class="wave-bars">
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
            </div>
            <div class="sc-info">
              <div class="sc-artist">Katy Perry</div>
              <div class="sc-name">Roar</div>
              <a class="sc-btn" href="https://www.youtube.com/watch?v=CevxZvSJLk8" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                Watch on YouTube
              </a>
            </div>
          </div>
          <p class="small-cap" style="margin:2px 0">Mark each lyric line as you listen:</p>
          <div style="display:flex;gap:12px;font-size:11px;margin-bottom:4px">
            <span><span class="hl-tag s">Struggle</span> = fear, silence, weakness</span>
            <span><span class="hl-tag p">Power</span> = confidence, strength</span>
          </div>
          <div class="lyrics" id="lyricsRoar">
            <div class="lyric-line hl" data-idx="0">I used to bite my tongue and hold my breath</div>
            <div class="lyric-line hl" data-idx="1">Scared to rock the boat and make a mess</div>
            <div class="lyric-line hl" data-idx="2">So I sat quietly, agreed politely</div>
            <div class="lyric-line gap"></div>
            <div class="lyric-line hl strong" data-idx="3">I got the eye of the tiger, a fighter</div>
            <div class="lyric-line hl strong" data-idx="4">Dancing through the fire</div>
            <div class="lyric-line hl strong" data-idx="5">'Cause I am a champion, and you're gonna hear me roar</div>
          </div>
          <p class="lyrics-hint">Click each line to tag it: <span class="hl-tag s">Struggle</span> → <span class="hl-tag p">Power</span> → Clear</p>
        </div>`,
      right: `
        <div class="p-band band-rose">
          <span class="p-tag">Lyrics Analysis</span>
          <span class="p-num">04</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Activity 2: Meaning</h2>
          <div class="field-row">
            <span class="field-label">"bite my tongue" means:</span>
            <input class="fi" type="text" placeholder="your answer..." />
          </div>
          <div class="field-row">
            <span class="field-label">"eye of the tiger" symbolizes:</span>
            <input class="fi" type="text" placeholder="your answer..." />
          </div>
          <div class="field-row">
            <span class="field-label">What transformation happens in the lyrics?</span>
            <input class="fi" type="text" placeholder="your answer..." />
          </div>

          <h2 class="h2" style="margin-top:2px">Activity 3: Literal vs. Figurative</h2>
          <div class="comp-tbl">
            <div class="comp-row head col-2">
              <div class="comp-cell h">Type</div>
              <div class="comp-cell h">Meaning</div>
            </div>
            <div class="comp-row col-2">
              <div class="comp-cell label" style="color:#7A5A10">Literal</div>
              <div class="comp-cell">The real, dictionary meaning</div>
            </div>
            <div class="comp-row alt col-2">
              <div class="comp-cell label" style="color:#5020B0">Figurative</div>
              <div class="comp-cell">A deeper, symbolic meaning</div>
            </div>
          </div>
          <div class="quote-blk">"Floating like a butterfly, stinging like a bee"</div>
          <div class="field-row">
            <span class="field-label">Literal meaning:</span>
            <input class="fi" type="text" placeholder="your answer..." />
          </div>
          <div class="field-row">
            <span class="field-label">Figurative meaning:</span>
            <input class="fi" type="text" placeholder="your answer..." />
          </div>
        </div>`
    },

    /* ── SPREAD 3: LANGUAGE INPUT + DEBATE ── */
    {
      label: 'Reading & Language Input',
      left: `
        <div class="p-band band-gold">
          <span class="p-tag">Language Input</span>
          <span class="p-num">05</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Grammar: Expressing Opinion</h2>
          <div class="chip-section">
            <div class="chip-label op">Giving Your Opinion</div>
            <div class="chips">
              <div class="chip op">I strongly believe that…</div>
              <div class="chip op">From my perspective…</div>
              <div class="chip op">It is important to…</div>
              <div class="chip op">In my humble opinion…</div>
            </div>
            <div class="chip-label ag">Agreeing</div>
            <div class="chips">
              <div class="chip ag">I agree because…</div>
              <div class="chip ag">I see eye to eye with you.</div>
              <div class="chip ag">That's a valid point.</div>
            </div>
            <div class="chip-label di">Disagreeing</div>
            <div class="chips">
              <div class="chip di">I see your point, however…</div>
              <div class="chip di">On the other hand…</div>
            </div>
          </div>
          <div class="small-cap" style="margin-top:4px">Quick Practice</div>
          <div class="field-row">
            <span class="field-label">I strongly believe that</span>
            <input class="fi" type="text" placeholder="..." />
          </div>
          <div class="field-row">
            <span class="field-label">I see your point, however</span>
            <input class="fi" type="text" placeholder="..." />
          </div>
        </div>`,
      right: `
        <div class="p-band band-indigo">
          <span class="p-tag">Critical Reflection</span>
          <span class="p-num">06</span>
        </div>
        <img src="/images/photo-debate.jpg" class="pg-illus" alt="Students in debate" />
        <div class="p-body">
          <div class="accent-block ab-violet" style="margin-bottom:8px">
            <div class="small-cap" style="margin-bottom:5px">Reflection Questions</div>
            <p style="font-size:11.5px;line-height:1.6;color:#1C1A2E">Is failure accepted in your school culture? Should students speak up more?</p>
          </div>
          <div class="field-row">
            <textarea class="fi" rows="3" placeholder="Share your honest thoughts about school culture..."></textarea>
          </div>
          <h2 class="h2">Activity 4: Mini-Debate</h2>
          <div class="debate-motion">
            <div class="dm-label">Motion</div>
            <p class="dm-text">"Stay quiet to keep the peace, or <em>roar</em> even if it causes conflict?"</p>
          </div>
          <div class="team-row" style="margin-top:8px">
            <div class="team-card tc-a">
              <div class="tc-head">Group A</div>
              <div class="tc-role">Pro-Silence</div>
              <p class="tc-desc">Staying quiet preserves harmony and prevents conflict.</p>
            </div>
            <div class="team-card tc-b">
              <div class="tc-head">Group B</div>
              <div class="tc-role">Pro-Voice</div>
              <p class="tc-desc">Speaking up drives change and builds genuine confidence.</p>
            </div>
          </div>
        </div>`
    },

    /* ── SPREAD 4: FIGHT SONG + LYRICS ── */
    {
      label: 'Speaking & Listening 2',
      left: `
        <div class="p-band band-indigo">
          <span class="p-tag">Speaking</span>
          <span class="p-num">07</span>
        </div>
        <img src="/images/photo-boat.jpg" class="pg-illus" alt="Small boat on the ocean" />
        <div class="p-body">
          <h2 class="h2">Debate — How to Run It</h2>
          <div class="steps-list" style="margin-bottom:10px">
            <div class="step-item"><div class="step-n">1</div>Form two groups (A &amp; B)</div>
            <div class="step-item"><div class="step-n">2</div>Prepare arguments using Page 5 expressions</div>
            <div class="step-item"><div class="step-n">3</div>Each side presents for 2 minutes</div>
            <div class="step-item"><div class="step-n">4</div>Open floor for rebuttals</div>
            <div class="step-item"><div class="step-n">5</div>Class votes on the strongest argument</div>
          </div>
          <h2 class="h2">Activity 5: Fight Song</h2>
          <div class="song-card sc-violet">
            <div class="sc-wave">
              <div class="wave-bars">
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
            </div>
            <div class="sc-info">
              <div class="sc-artist">Rachel Platten</div>
              <div class="sc-name">Fight Song</div>
              <a class="sc-btn" href="https://www.youtube.com/watch?v=xo1VInw-SKc" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                Watch on YouTube
              </a>
            </div>
          </div>
          <p class="lead">This song uses water &amp; fire imagery to show resilience. As you listen, note down small things and big impacts.</p>
        </div>`,
      right: `
        <div class="p-band band-violet">
          <span class="p-tag">Listening — Part 2</span>
          <span class="p-num">08</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Note-Taking</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div>
              <div class="small-cap" style="color:#8A6010;margin-bottom:4px">Small Things</div>
              <textarea class="fi" rows="3" placeholder="e.g. small boat, single word..."></textarea>
            </div>
            <div>
              <div class="small-cap" style="color:#901040;margin-bottom:4px">Big Impacts</div>
              <textarea class="fi" rows="3" placeholder="e.g. big waves, heart open..."></textarea>
            </div>
          </div>
          <div class="accent-block ab-violet" style="font-size:11.5px;margin-bottom:8px">
            "I might only have one match, but I can make an explosion." — How does this relate to a student who feels they are not smart or popular enough?
          </div>
          <textarea class="fi" rows="3" placeholder="Your reflection on the quote above..."></textarea>
        </div>`
    },

    /* ── SPREAD 5: FIGHT SONG LYRICS + COMPARISON ── */
    {
      label: 'Fight Song Analysis',
      left: `
        <div class="p-band band-violet">
          <span class="p-tag">Lyrics Analysis</span>
          <span class="p-num">09</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Fight Song — Edited Lyrics</h2>
          <div class="lyrics">
            <div class="lyric-line">Like a small boat on the ocean</div>
            <div class="lyric-line">Sending big waves into motion</div>
            <div class="lyric-line">Like how a single word can make a heart open</div>
            <div class="lyric-line gap"></div>
            <div class="lyric-line strong">This is my fight song</div>
            <div class="lyric-line strong">Take back my life song</div>
            <div class="lyric-line strong">Prove I'm alright song</div>
            <div class="lyric-line strong">My power's turned on</div>
          </div>
          <div class="field-row">
            <span class="field-label">"fight song" means:</span>
            <input class="fi" type="text" placeholder="your answer..." />
          </div>
          <div class="field-row">
            <span class="field-label">"small boat" represents:</span>
            <input class="fi" type="text" placeholder="your answer..." />
          </div>
          <div class="field-row">
            <span class="field-label">The main message of this song is:</span>
            <input class="fi" type="text" placeholder="your answer..." />
          </div>
        </div>`,
      right: `
        <div class="p-band band-teal">
          <span class="p-tag">Comparative Reading</span>
          <span class="p-num">10</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Activity 7: Comparing the Songs</h2>
          <p class="lead" style="margin-bottom:6px">Fill in the table based on your analysis:</p>
          <div class="comp-tbl">
            <div class="comp-row head col-3">
              <div class="comp-cell h">Aspect</div>
              <div class="comp-cell h" style="background:#E05A7A12;color:#901040">Roar</div>
              <div class="comp-cell h" style="background:#8B5CF612;color:#5020B0">Fight Song</div>
            </div>
            <div class="comp-row col-3">
              <div class="comp-cell label">Main Symbol</div>
              <div class="comp-cell pre-r">Tiger / Thunder</div>
              <div class="comp-cell pre-v">Small Boat / Fire</div>
            </div>
            <div class="comp-row alt col-3">
              <div class="comp-cell label">Struggle</div>
              <div class="comp-cell"><input class="fi" type="text" placeholder="..." /></div>
              <div class="comp-cell"><input class="fi" type="text" placeholder="..." /></div>
            </div>
            <div class="comp-row col-3">
              <div class="comp-cell label">Turning Point</div>
              <div class="comp-cell"><input class="fi" type="text" placeholder="..." /></div>
              <div class="comp-cell"><input class="fi" type="text" placeholder="..." /></div>
            </div>
            <div class="comp-row alt col-3">
              <div class="comp-cell label">Theme</div>
              <div class="comp-cell"><input class="fi" type="text" placeholder="..." /></div>
              <div class="comp-cell"><input class="fi" type="text" placeholder="..." /></div>
            </div>
            <div class="comp-row col-3">
              <div class="comp-cell label">Emotion</div>
              <div class="comp-cell"><input class="fi" type="text" placeholder="..." /></div>
              <div class="comp-cell"><input class="fi" type="text" placeholder="..." /></div>
            </div>
          </div>
          <div class="field-row" style="margin-top:4px">
            <span class="field-label">Which song is more powerful to you? Why?</span>
            <textarea class="fi" rows="2" placeholder="Explain your choice..."></textarea>
          </div>
        </div>`
    },

    /* ── SPREAD 6: CRITICAL THINKING + MODALS ── */
    {
      label: 'Critical Thinking & Modals',
      left: `
        <div class="p-band band-rose">
          <span class="p-tag">Critical Thinking</span>
          <span class="p-num">11</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Activity 8: Your Verdict</h2>
          <p class="lead">Which song is more powerful to you?</p>
          <div class="vote-row">
            <button class="vote-btn" id="voteRoar">Roar</button>
            <button class="vote-btn" id="voteFight">Fight Song</button>
          </div>
          <div class="vote-feedback" id="voteFeedback" style="display:none"></div>
          <div class="field-row" style="margin-top:6px">
            <span class="field-label">Which song reflects your personality? Explain.</span>
            <textarea class="fi" rows="2" placeholder="Write your reasoning..."></textarea>
          </div>
          <div class="field-row">
            <span class="field-label">Which would you recommend to a friend going through a hard time? Why?</span>
            <textarea class="fi" rows="2" placeholder="Write your reasoning..."></textarea>
          </div>
        </div>`,
      right: `
        <div class="p-band band-gold">
          <span class="p-tag">Language in Action</span>
          <span class="p-num">12</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Modals of Determination</h2>
          <div class="modal-grid">
            <div class="modal-card mc-will">
              <div class="mc-word">WILL</div>
              <div class="mc-use">Future intention</div>
              <div class="mc-ex">"I will speak up in every discussion."</div>
            </div>
            <div class="modal-card mc-wont">
              <div class="mc-word">WON'T</div>
              <div class="mc-use">Refusing defeat</div>
              <div class="mc-ex">"I won't give up on my dreams."</div>
            </div>
            <div class="modal-card mc-can">
              <div class="mc-word">CAN</div>
              <div class="mc-use">Ability &amp; possibility</div>
              <div class="mc-ex">"I can make a difference."</div>
            </div>
            <div class="modal-card mc-must">
              <div class="mc-word">MUST</div>
              <div class="mc-use">Obligation &amp; necessity</div>
              <div class="mc-ex">"I must believe in myself."</div>
            </div>
          </div>
          <div class="small-cap" style="margin-top:4px">Your Personal Determination Statements</div>
          <div class="field-row"><span class="field-label">I will</span><input class="fi" type="text" placeholder="..." /></div>
          <div class="field-row"><span class="field-label">I won't</span><input class="fi" type="text" placeholder="..." /></div>
          <div class="field-row"><span class="field-label">I can</span><input class="fi" type="text" placeholder="..." /></div>
          <div class="field-row"><span class="field-label">I must</span><input class="fi" type="text" placeholder="..." /></div>
        </div>`
    },

    /* ── SPREAD 7: WRITING ── */
    {
      label: 'Writing Task',
      left: `
        <div class="p-band band-indigo">
          <span class="p-tag">Writing</span>
          <span class="p-num">13</span>
        </div>
        <img src="/images/photo-writing.jpg" class="pg-illus" alt="Student writing" />
        <div class="p-body">
          <h2 class="h2">Analytical Exposition Structure</h2>
          <div class="struct-steps">
            <div class="struct-step ss-thesis">
              <div class="ss-num">1</div>
              <div>
                <div class="ss-name">Thesis</div>
                <div class="ss-desc">State your clear position on the topic.</div>
              </div>
            </div>
            <div class="struct-step ss-arg">
              <div class="ss-num">2</div>
              <div>
                <div class="ss-name">Arguments</div>
                <div class="ss-desc">2–3 strong points with song evidence.</div>
              </div>
            </div>
            <div class="struct-step ss-reiter">
              <div class="ss-num">3</div>
              <div>
                <div class="ss-name">Reiteration</div>
                <div class="ss-desc">Restate thesis in a stronger, compelling way.</div>
              </div>
            </div>
          </div>
          <div class="accent-block ab-rose" style="margin-top:4px">
            <div class="small-cap" style="margin-bottom:4px">Integrating Song Quotes</div>
            <p style="font-size:11px;line-height:1.55;color:#1C1A2E">
              1. Introduce: "As Katy Perry sings in Roar…"<br/>
              2. Quote: write it in quotation marks<br/>
              3. Explain: why it supports your argument
            </p>
          </div>
          <div class="quote-blk" style="font-size:12px">"I got the eye of the tiger, a fighter, dancing through the fire…"<span style="display:block;font-size:10px;text-align:right;opacity:0.6;margin-top:4px">— Katy Perry, Roar</span></div>
        </div>`,
      right: `
        <div class="p-band band-indigo">
          <span class="p-tag">Activity 9</span>
          <span class="p-num">14</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Your Writing Task</h2>
          <div style="padding:8px 12px;background:#8B5CF612;border-radius:8px;border-left:3px solid #8B5CF6;margin-bottom:8px">
            <div class="small-cap" style="margin-bottom:3px">Topic</div>
            <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:12.5px;color:#1C1A2E;line-height:1.45">"Why Indonesian Teenagers Must Adopt a 'Try Everything' and 'Roar' Mindset"</p>
          </div>
          <div style="display:flex;gap:8px;margin-bottom:6px">
            <span style="font-size:10px;padding:3px 9px;background:rgba(0,0,0,0.05);border-radius:50px;color:#4A4760">200–250 words</span>
            <span style="font-size:10px;padding:3px 9px;background:rgba(0,0,0,0.05);border-radius:50px;color:#4A4760">Include 1+ song quote</span>
          </div>
          <textarea class="fi" id="writingArea" rows="8" placeholder="Start writing here...&#10;&#10;Thesis:&#10;&#10;Argument 1:&#10;&#10;Argument 2:&#10;&#10;Reiteration:" style="font-family:'Lora',serif;font-size:12px;line-height:1.75"></textarea>
          <div class="wc-row">
            <span class="wc-count" id="wordCount">0 words</span>
            <span>Target: 200–250</span>
          </div>
        </div>`
    },

    /* ── SPREAD 8: PRESENTATION + REFLECTION ── */
    {
      label: 'Presentation & Reflection',
      left: `
        <div class="p-band band-violet">
          <span class="p-tag">Presentation</span>
          <span class="p-num">15</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Activity 10: Present Your Argument</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:10px">
            <div class="accent-block ab-violet" style="font-size:11px;padding:10px 11px">
              <strong style="display:block;margin-bottom:3px">Speak clearly</strong>
              Steady pace, eye contact with audience
            </div>
            <div class="accent-block ab-teal" style="font-size:11px;padding:10px 11px">
              <strong style="display:block;margin-bottom:3px">Use expressions</strong>
              Apply phrases from the Language page
            </div>
            <div class="accent-block ab-rose" style="font-size:11px;padding:10px 11px">
              <strong style="display:block;margin-bottom:3px">Strong reasoning</strong>
              Back every argument with evidence
            </div>
            <div class="accent-block ab-gold" style="font-size:11px;padding:10px 11px">
              <strong style="display:block;margin-bottom:3px">Quote a song</strong>
              Use Roar or Fight Song lyrics
            </div>
          </div>
          <div class="small-cap" style="margin-bottom:6px">Presentation Checklist</div>
          <div class="checklist">
            <label class="check-row"><input type="checkbox"/><span>I have prepared my thesis statement</span></label>
            <label class="check-row"><input type="checkbox"/><span>I have at least 2 strong arguments</span></label>
            <label class="check-row"><input type="checkbox"/><span>I have a song quote as evidence</span></label>
            <label class="check-row"><input type="checkbox"/><span>I have practiced speaking aloud</span></label>
            <label class="check-row"><input type="checkbox"/><span>I feel ready to present with confidence</span></label>
          </div>
        </div>`,
      right: `
        <div class="p-band band-gold">
          <span class="p-tag">Reflection</span>
          <span class="p-num">16</span>
        </div>
        <div class="p-body">
          <h2 class="h2">Looking Back</h2>
          <div class="refl-card">
            <div class="refl-n">1</div>
            <div class="refl-q">What surprised you most in this unit?</div>
            <textarea class="fi" rows="2" placeholder="Write your reflection..."></textarea>
          </div>
          <div class="refl-card" style="margin-top:6px">
            <div class="refl-n">2</div>
            <div class="refl-q">Which skill improved the most for you?</div>
            <div class="skill-opts">
              <label class="skill-opt"><input type="radio" name="skill" /><span>Listening</span></label>
              <label class="skill-opt"><input type="radio" name="skill" /><span>Reading</span></label>
              <label class="skill-opt"><input type="radio" name="skill" /><span>Speaking</span></label>
              <label class="skill-opt"><input type="radio" name="skill" /><span>Writing</span></label>
            </div>
          </div>
          <div class="refl-card" style="margin-top:6px">
            <div class="refl-n">3</div>
            <div class="refl-q">How did songs help your English learning?</div>
            <textarea class="fi" rows="2" placeholder="Write your reflection..."></textarea>
          </div>
          <div class="badge-wrap">
            <div class="badge-ring" id="badgeRing">
              <svg viewBox="0 0 70 70">
                <circle cx="35" cy="35" r="30" fill="none" stroke="#8B5CF6" stroke-width="3" class="badge-circle"/>
              </svg>
              <div class="badge-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
            <div class="badge-lbl">Unit 1 Complete</div>
          </div>
        </div>`
    }

  ];

  /* ─────────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────────── */
  const TOTAL = spreads.length; // 0..8
  let cur      = 0;
  let busy     = false;

  /* ─────────────────────────────────────────────────
     DOM REFS
  ───────────────────────────────────────────────── */
  const loader       = document.getElementById('loader');
  const app          = document.getElementById('app');
  const pageLeft     = document.getElementById('pageLeft');
  const pageLeftIn   = document.getElementById('pageLeftInner');
  const pageRightIn  = document.getElementById('pageRightInner');
  const flip         = document.getElementById('flip');
  const flipFront    = document.getElementById('flipFront');
  const flipBack     = document.getElementById('flipBack');
  const flipCurl     = document.getElementById('flipCurl');
  const prevBtn      = null;
  const nextBtn      = null;
  const dotsEl       = document.getElementById('dots');
  const spreadLabel  = document.getElementById('spreadLabel');
  const tocBtn       = document.getElementById('tocBtn');
  const tocEl        = document.getElementById('toc');
  const tocBg        = document.getElementById('tocBg');
  const tocX         = document.getElementById('tocX');
  const fsBtn        = document.getElementById('fsBtn');
  const tocLinks     = document.querySelectorAll('.toc-a');

  /* ─────────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────────── */
  /* Script is at end of body — DOM is ready, run synchronously */
  loader.classList.add('gone');
  app.classList.add('on');
  buildDots();
  cur = 0;
  renderSpread(cur, 'none');

  /* ─────────────────────────────────────────────────
     RENDER — set left/right content without animation
  ───────────────────────────────────────────────── */
  function renderSpread(idx, dir) {
    const s = spreads[idx];
    pageLeftIn.innerHTML  = s.left;
    pageRightIn.innerHTML = s.right;
    updateUI(idx);
    bindPageInteractivity();

    if (idx === TOTAL - 1) {
      setTimeout(() => {
        const ring = document.getElementById('badgeRing');
        if (ring) ring.classList.add('go');
      }, 600);
    }
  }

  /* ─────────────────────────────────────────────────
     GO TO SPREAD — realistic curved page flip
  ───────────────────────────────────────────────── */

  /* Keyframes for the page curl — perspective tightens at midpoint
     to simulate the page bowing as it lifts off the book */
  const CURL_FWD = [
    { transform: 'perspective(1600px) rotateY(0deg)   translateZ(0px)',  offset: 0    },
    { transform: 'perspective(1100px) rotateY(-38deg)  translateZ(5px)',  offset: 0.18 },
    { transform: 'perspective(650px)  rotateY(-90deg)  translateZ(12px)', offset: 0.50 },
    { transform: 'perspective(1100px) rotateY(-142deg) translateZ(5px)',  offset: 0.82 },
    { transform: 'perspective(1600px) rotateY(-180deg) translateZ(0px)',  offset: 1    }
  ];
  const CURL_BWD = [
    { transform: 'perspective(1600px) rotateY(-180deg) translateZ(0px)',  offset: 0    },
    { transform: 'perspective(1100px) rotateY(-142deg) translateZ(5px)',  offset: 0.18 },
    { transform: 'perspective(650px)  rotateY(-90deg)  translateZ(12px)', offset: 0.50 },
    { transform: 'perspective(1100px) rotateY(-38deg)  translateZ(5px)',  offset: 0.82 },
    { transform: 'perspective(1600px) rotateY(0deg)    translateZ(0px)',  offset: 1    }
  ];

  /* Curl shadow keyframes — bright highlight at far edge, dark at spine */
  const CURL_SHADOW_FWD = [
    { background: 'linear-gradient(to left, rgba(255,255,255,0.0) 0%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0.0) 100%)', opacity: '0' },
    { background: 'linear-gradient(to left, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0.38) 100%)', opacity: '1', offset: 0.5 },
    { background: 'linear-gradient(to left, rgba(255,255,255,0.0) 0%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0.0) 100%)', opacity: '0' }
  ];
  const CURL_SHADOW_BWD = [
    { background: 'linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0.0) 100%)', opacity: '0' },
    { background: 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0.38) 100%)', opacity: '1', offset: 0.5 },
    { background: 'linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0.0) 100%)', opacity: '0' }
  ];

  const ANIM_OPTS = {
    duration: 980,
    easing: 'cubic-bezier(0.42, 0, 0.32, 1)',
    fill: 'forwards'
  };

  function goTo(target) {
    if (busy || target === cur || target < 0 || target >= TOTAL) return;
    busy = true;

    const dir  = target > cur ? 'forward' : 'backward';
    const next = spreads[target];
    const curr = spreads[cur];

    if (dir === 'forward') {
      flipFront.innerHTML = curr.right;
      flipBack.innerHTML  = next.left;

      flip.style.transform = 'perspective(1600px) rotateY(0deg)';
      flip.style.zIndex    = '20';
      flip.style.display   = 'block';

      pageRightIn.innerHTML = next.right;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          flip.classList.add('turning');

          const anim       = flip.animate(CURL_FWD, ANIM_OPTS);
          const shadowAnim = flipCurl.animate(CURL_SHADOW_FWD, ANIM_OPTS);

          anim.onfinish = () => {
            pageLeftIn.innerHTML  = next.left;
            pageRightIn.innerHTML = next.right;
            flip.style.display    = 'none';
            flip.style.transform  = '';
            flip.classList.remove('turning');
            flipCurl.style.background = '';
            flipCurl.style.opacity    = '0';
            cur  = target;
            busy = false;
            updateUI(cur);
            bindPageInteractivity();
            if (cur === TOTAL - 1) {
              setTimeout(() => {
                const ring = document.getElementById('badgeRing');
                if (ring) ring.classList.add('go');
              }, 400);
            }
          };
        });
      });

    } else {
      flipFront.innerHTML = next.right;
      flipBack.innerHTML  = curr.left;

      flip.style.transform = 'perspective(1600px) rotateY(-180deg)';
      flip.style.zIndex    = '20';
      flip.style.display   = 'block';

      pageLeftIn.innerHTML = next.left;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          flip.classList.add('turning');

          const anim       = flip.animate(CURL_BWD, ANIM_OPTS);
          const shadowAnim = flipCurl.animate(CURL_SHADOW_BWD, ANIM_OPTS);

          anim.onfinish = () => {
            pageLeftIn.innerHTML  = next.left;
            pageRightIn.innerHTML = next.right;
            flip.style.display    = 'none';
            flip.style.transform  = '';
            flip.classList.remove('turning');
            flipCurl.style.background = '';
            flipCurl.style.opacity    = '0';
            cur  = target;
            busy = false;
            updateUI(cur);
            bindPageInteractivity();
          };
        });
      });
    }
  }

  /* ─────────────────────────────────────────────────
     UPDATE UI
  ───────────────────────────────────────────────── */
  function updateUI(idx) {
    spreadLabel.textContent = spreads[idx].label;
    dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('on', i === idx));
    tocLinks.forEach(a => a.classList.toggle('cur', parseInt(a.dataset.spread) === idx));
    /* Edge states — hide arrow & cursor on first/last page */
    pageLeft.classList.toggle('no-prev', idx === 0);
    pageRight.classList.toggle('no-next', idx === TOTAL - 1);
  }

  /* ─────────────────────────────────────────────────
     BUILD DOTS
  ───────────────────────────────────────────────── */
  function buildDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i < TOTAL; i++) {
      const d = document.createElement('button');
      d.className = 'dot';
      d.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(d);
    }
  }

  /* ─────────────────────────────────────────────────
     BIND PAGE INTERACTIVITY (re-run after each render)
  ───────────────────────────────────────────────── */
  function bindPageInteractivity() {
    /* Open Book button on cover */
    const openBtn = document.getElementById('openBookBtn');
    if (openBtn) openBtn.addEventListener('click', () => goTo(1));

    /* Lyric line toggle */
    document.querySelectorAll('.lyric-line.hl').forEach(line => {
      let state = 0;
      line.addEventListener('click', () => {
        state = (state + 1) % 3;
        line.classList.remove('hl-s', 'hl-p');
        if (state === 1) line.classList.add('hl-s');
        if (state === 2) line.classList.add('hl-p');
      });
    });

    /* Vote buttons */
    const vr = document.getElementById('voteRoar');
    const vf = document.getElementById('voteFight');
    const vfb = document.getElementById('voteFeedback');
    if (vr && vf && vfb) {
      const roarMsgs = [
        'Bold choice. Roar speaks to those done being silent.',
        'A tiger never asks for permission. Smart pick.',
      ];
      const fightMsgs = [
        'One match, one explosion — that\'s the spirit.',
        'Small boat, big waves. Fight Song never disappoints.',
      ];
      vr.addEventListener('click', () => {
        vr.classList.add('picked-r'); vf.classList.remove('picked-f');
        vfb.style.display = 'block';
        vfb.textContent = roarMsgs[Math.floor(Math.random() * roarMsgs.length)];
      });
      vf.addEventListener('click', () => {
        vf.classList.add('picked-f'); vr.classList.remove('picked-r');
        vfb.style.display = 'block';
        vfb.textContent = fightMsgs[Math.floor(Math.random() * fightMsgs.length)];
      });
    }

    /* Word counter */
    const wa = document.getElementById('writingArea');
    const wc = document.getElementById('wordCount');
    if (wa && wc) {
      wa.addEventListener('input', () => {
        const words = wa.value.trim().split(/\s+/).filter(w => w.length > 0).length;
        wc.textContent = words + ' word' + (words !== 1 ? 's' : '');
        wc.style.color = words >= 200 && words <= 250 ? '#2BBFA4' : words > 250 ? '#E05A7A' : '#4C6EF5';
      });
    }

    /* Phrase chips — copy to clipboard */
    document.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chip.style.transform = 'scale(0.93)';
        setTimeout(() => { chip.style.transform = ''; }, 140);
        if (navigator.clipboard) navigator.clipboard.writeText(chip.textContent.trim()).catch(() => {});
        showToast('Copied: "' + chip.textContent.trim() + '"');
      });
    });
  }

  /* ─────────────────────────────────────────────────
     BOOK PAGE CLICK NAVIGATION
  ───────────────────────────────────────────────── */
  pageLeft.addEventListener('click', (e) => {
    /* Don't trigger if clicking inside interactive elements */
    if (e.target.closest('input, textarea, button, a, label, select')) return;
    if (!pageLeft.classList.contains('no-prev')) goTo(cur - 1);
  });

  pageRight.addEventListener('click', (e) => {
    if (e.target.closest('input, textarea, button, a, label, select')) return;
    if (!pageRight.classList.contains('no-next')) goTo(cur + 1);
  });

  /* ─────────────────────────────────────────────────
     KEYBOARD
  ───────────────────────────────────────────────── */

  document.addEventListener('keydown', e => {
    if (busy) return;
    if (e.key === 'ArrowRight') goTo(cur + 1);
    if (e.key === 'ArrowLeft')  goTo(cur - 1);
  });

  /* ─────────────────────────────────────────────────
     SWIPE
  ───────────────────────────────────────────────── */
  let tx = 0;
  document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend',   e => {
    if (busy) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) dx < 0 ? goTo(cur + 1) : goTo(cur - 1);
  }, { passive: true });

  /* ─────────────────────────────────────────────────
     TOC
  ───────────────────────────────────────────────── */
  const openToc  = () => { tocEl.classList.add('on'); tocBg.classList.add('on'); };
  const closeToc = () => { tocEl.classList.remove('on'); tocBg.classList.remove('on'); };
  tocBtn.addEventListener('click', openToc);
  tocX.addEventListener('click', closeToc);
  tocBg.addEventListener('click', closeToc);
  tocLinks.forEach(a => {
    a.addEventListener('click', () => {
      closeToc();
      setTimeout(() => goTo(parseInt(a.dataset.spread)), 300);
    });
  });

  /* ─────────────────────────────────────────────────
     FULLSCREEN
  ───────────────────────────────────────────────── */
  fsBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen().catch(() => {});
  });

  /* ─────────────────────────────────────────────────
     3D MOUSE TILT on book
  ───────────────────────────────────────────────── */
  const stage   = document.getElementById('stage');
  const wrapper = document.getElementById('bookWrapper');

  stage.addEventListener('mousemove', e => {
    if (busy) return;
    const r  = stage.getBoundingClientRect();
    const cx = r.left + r.width  / 2;
    const cy = r.top  + r.height / 2;
    const dx = (e.clientX - cx) / (r.width  / 2);
    const dy = (e.clientY - cy) / (r.height / 2);
    wrapper.style.transform = `rotateX(${18 + dy * -4}deg) rotateY(${dx * 5}deg)`;
  });

  stage.addEventListener('mouseleave', () => {
    wrapper.style.transform = 'rotateX(18deg) rotateY(0deg)';
  });

  /* ─────────────────────────────────────────────────
     TOAST
  ───────────────────────────────────────────────── */
  function showToast(msg) {
    let t = document.getElementById('__toast');
    if (!t) {
      t = document.createElement('div');
      t.id = '__toast';
      Object.assign(t.style, {
        position:'fixed', bottom:'76px', left:'50%',
        transform:'translateX(-50%) translateY(8px)',
        background:'rgba(13,14,18,0.96)', color:'#E0DDF0',
        padding:'9px 18px', borderRadius:'50px', fontSize:'11.5px',
        fontFamily:'Inter,sans-serif', border:'1px solid rgba(255,255,255,0.1)',
        backdropFilter:'blur(12px)', zIndex:'9999', opacity:'0',
        transition:'opacity 0.25s,transform 0.25s', pointerEvents:'none', whiteSpace:'nowrap'
      });
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity   = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(t._t);
    t._t = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(8px)'; }, 2200);
  }

})();
