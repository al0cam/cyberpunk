<script lang="ts">
  import JohnnySilverhand from "./assets/Johnny.jpg";
  import cyberpunk_logo from "./assets/cyberpunk_logo_cropped.png";
  import samurai_cropped from "./assets/samurai_cropped.png";
  import samurai_background from "./assets/samurai_background.jpg";
  import cyberpunk_background from "./assets/cyberpunk_background.jpg";
  import Marquee from "./components/Marquee.svelte";
  import ReverseMarquee from "./components/ReverseMarquee.svelte";

  const activeImage = JohnnySilverhand;

  let background = null;

  // TODO: use for animations
  let leftWidth = 50;
  let rightWidth = 50;

  function changeBackground(newBackground: string) {
    background = newBackground;
  }
  function resetBackground() {
    background = null;
  }
</script>

<main class="m-0 h-screen w-screen object-contain relative overflow-hidden">
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
    class="absolute top-0 left-0 z-10 object-cover object-top h-screen w-screen"
    src={background}
    alt="A background which changes based on the item hovered"
  />

  <div class="absolute z-30 w-full h-full flex flex-row items-center">
    <div class="z-30 w-1/2 overflow-hidden">
      <img
        class=" w-svw max-w-none"
        src={cyberpunk_logo}
        alt="Cyberpunk 2077"
        onmouseover={() => changeBackground(cyberpunk_background)}
        onfocus={() => changeBackground(cyberpunk_background)}
        onmouseleave={() => resetBackground()}
        onblur={() => resetBackground()}
      />
    </div>

    <div class=" z-30 w-1/2 h-full overflow-hidden">
      <img
        class="-translate-x-1/2 z-10 max-w-none h-full"
        src={samurai_cropped}
        alt="Samurai logo from Cyberpunk 2077"
      />
    </div>
  </div>
</main>
