<script lang="ts">
  let { text = "", class: _class = "" } = $props();
</script>

<div class={_class}>
  <div class="flex flex-row overflow-x-hidden gap-2">
    <div class=" animate-marquee text-6xl whitespace-nowrap">
      {text}
    </div>
    <div class=" animate-marquee text-6xl whitespace-nowrap">
      {text}
    </div>
  </div>
</div>
