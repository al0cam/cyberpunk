<script lang="ts">
  let { text = "", class: _class = "" } = $props();
</script>

<div class={_class}>
  <div class="flex overflow-x-hidden gap-2">
    <div class="animate-reverse_marquee text-6xl whitespace-nowrap">
      {text}
    </div>
    <div class="absolute animate-reverse_marquee2 text-6xl whitespace-nowrap pr-6">
      {text}
    </div>
  </div>
</div>
