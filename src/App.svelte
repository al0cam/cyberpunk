<script lang="ts">
import {store} from "./lib/Store.svelte.ts";
let count = $state(0);
</script>

<main>
  <div class="text-3xl">cancer</div>

  <div class="text-3xl">Count: {count}</div>
  <button on:click={() => count += 1}>Increment</button>
  
  <div>Count of cancer: {store.count}</div>
  <button class="btn" on:click={() => store.increment()}>Increment</button>
  <button class="btn btn-warning" on:click={() => store.decrement()}>Decrement</button>

</main>
