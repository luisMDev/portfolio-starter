export const ConsoleCodeModel = [
  `<span class="keyword">import</span> { createClient } <span class="keyword">from</span> <span class="string">"@rewards-lab/node-client"</span>;
              
<span class="keyword">const</span> client = createClient({
  <span class="attr">apiKey</span>: <span class="string">"..."</span>,
});

<span class="keyword">await</span> client.users.identify({
  <span class="attr">userId</span>: <span class="string">"USER_ID"</span>,
  <span class="attr">name</span>: <span class="string">"USER_NAME"</span>,
  <span class="attr">email</span>: <span class="string">"USER_EMAIL"</span>,
});

<span class="keyword">await</span> client.events.track({
  <span class="attr">name</span>: <span class="string">"EVENT_ID"</span>,
  <span class="attr">value</span>: <span class="number">1</span>,
});`,
  `<span class="keyword">import</span> { createClient } <span class="keyword">from</span> <span class="string">"@rewards-lab/node-client"</span>;
            
<span class="keyword">const</span> client = createClient({
  <span class="attr">apiKey</span>: <span class="string">"..."</span>,
});

<span class="keyword">const</span> rewards$ = client.webhooks.onCall({
  <span class="attr">event</span>: <span class="string">"user:USER_ID:rewards:claim"</span>,
})

rewards$.subscribe((data) => {
  <span class="keyword">const</span> { reward, user } = data;
  <span class="comment">// Do something when the user claim a reward</span>
  <span class="comment">// reward - the reward that the user claimed</span>
  <span class="comment">// user - the user that claimed the reward</span>
});`,
  `<span class="keyword">import</span> { createClient } <span class="keyword">from</span> <span class="string">"@rewards-lab/node-client"</span>;
            
<span class="keyword">const</span> client = createClient({
  <span class="attr">apiKey</span>: <span class="string">"..."</span>,
});

<span class="keyword">await</span> client.users.identify({
  <span class="attr">userId</span>: <span class="string">"USER_ID"</span>,
  <span class="attr">name</span>: <span class="string">"USER_NAME"</span>,
  <span class="attr">email</span>: <span class="string">"USER_EMAIL"</span>,
});

<span class="keyword">await</span> client.rewards.claim({
  <span class="attr">userId</span>: <span class="string">"USER_ID"</span>,
  <span class="attr">rewardId</span>: <span class="string">"REWARD_ID"</span>,
});`,
];
