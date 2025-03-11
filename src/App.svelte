<script lang="ts">
  import Marquee from "./components/Marquee.svelte";
  import JohnnySilverhand from "./assets/Johnny.jpg";
  import samurai_cropped from "./assets/samurai_cropped.png";
  import cyberpunk_logo from "./assets/cyberpunk_logo_cropped.png";
  import ReverseMarquee from "./components/ReverseMarquee.svelte";
  const activeImage = JohnnySilverhand;
</script>

<main class="m-0 h-screen object-contain relative overflow-hidden">
  <img
    class="absolute top-0 left-0 z-0 opacity-20 object-cover object-top h-screen w-screen"
    src={activeImage}
    alt="Johnny Silverhand"
  />
  <Marquee
    class="absolute bottom-[10vw] -left-[10vw] rotate-45 text-6xl w-[40vw] text-yellow-300"
    text="Wake the fuck up, Samurai. We have a city to burn."
  />
  <ReverseMarquee
    class="absolute bottom-0 -right-[3vw] -rotate-45 text-6xl w-[20vw] text-yellow-300"
    text="LAPD > DO NOT CROSS"
  />

  <img
    class="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-100 w-[100vh] rotate-90"
    src={cyberpunk_logo}
    alt="Cyberpunk 2077"
  />
  <img
    class="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-100"
    src={samurai_cropped}
    alt="Samurai logo from Cyberpunk 2077"
  />
</main>
