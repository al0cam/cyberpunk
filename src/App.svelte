<script lang="ts">
  import Marquee from "./components/Marquee.svelte";
    import JohnnySilverhand from './assets/Johnny.jpg'
  let activeImage = JohnnySilverhand;
</script>

<main class="m-0 h-screen object-contain relative overflow-hidden">
  <Marquee
    class="absolute bottom-[10vw] -left-[10vw] rotate-45 text-6xl w-[40vw] text-yellow-300"

    text="Wake the fuck up, Samurai. We have a city to burn."
  />
  <Marquee
    class="absolute bottom-0 -right-[3vw] -rotate-45 text-6xl w-[20vw] text-yellow-300"
    text="LAPD > DO NOT CROSS"
  />

  <img
    class="absolute bg-cover bg-center top-0 left-0 z-0 opacity-20 object-cover object-top h-screen w-screen"
    src={activeImage}
    alt="Johnny Silverhand"
  />
</main>
