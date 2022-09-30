<script>
  import Header from '../components/header.svelte'
  import nick_cutout from '../../static/img/nick-cutout.png'
  import stats_card from '../../static/img/stats-card.png'
  import GreenTriangle from '../components/icons/green_triangle.svelte'
  import WhiteTriangle from '../components/icons/white_triangle.svelte'
  import Section from '../components/section.svelte'
  import Developer from '../components/icons/developer.svelte'
</script>

<style>
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  .bounce {
    animation: bounce 2s infinite;
  }
</style>

<div>
  <Header />
  <div class="z-40 absolute bottom-4 left-1/2 transform -translate-x-1/2">
    <div class="flex flex-row items-center justify-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="bounce w-4 fill-white"
          viewBox="0 0 384 512">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5
            12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224
            64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6
            265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </div>
      <div class="text-xl text-white font-semibold bounce mx-2">Learn More</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="bounce w-4 fill-white"
          viewBox="0 0 384 512">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5
            12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224
            64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6
            265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </div>
    </div>
  </div>
  <div class="mb-[-86px]">
    <Section>
      <div class="absolute right-0 bottom-0">
        <GreenTriangle style={'w-[1000px] fill-primary'} />
      </div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2
        -translate-y-1/2 hidden lg:block">
        <Developer style={'w-[1400px]'} />
      </div>
      <div class="absolute lg:right-32 right-10 bottom-0">
        <img src={nick_cutout} class="lg:w-96 w-60" alt="" />
      </div>
      <div
        class="text-center pt-10 lg:pt-0 lg:text-left lg:absolute lg:bottom-28">
        <div
          class="lg:ml-20 flex-col text-primary font-poppins font-bold text-5xl">
          <div class="mb-1">Hello!</div>
          <div class="mb-10">I'm Nick.</div>
        </div>
      </div>
    </Section>
  </div>
  <Section style={'w-screen h-screen bg-primary'}>
    <div class="flex flex-col">
      <div class="flex flex-row justify-between">
        <div
          class="z-20 flex flex-col justify-start w-full lg:pl-20 lg:pt-72 pt-5
          pl-5">
          <div
            class="lg:w-1/3 w-2/3 text-primary lg:text-base-100 text-4xl
            lg:text-6xl font-poppins font-bold">
            student, programmer, advocate for innovation
          </div>
          <a
            href="/nmi"
            class="border-2 border-primary mt-5 rounded-2xl text-lg h-10 w-40
            lg:w-48 bg-base-100 text-primary font-bold font-poppins flex
            justify-center items-center">
            View My Work
          </a>
        </div>
        <div class="z-10 relative">
          <div
            class="z-10 absolute right-0 top-0 lg:flex lg:flex-col
            lg:justify-center">
            <WhiteTriangle style={'w-[1000px] fill-primary'} />
            <div class="z-20 hidden lg:block ml-[325px] mt-[-450px]">
              <img src={stats_card} class="w-[350px]" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row w-full justify-center mt-24 z-20 lg:hidden">
        <img src={stats_card} class="w-[350px]" alt="" />
      </div>
    </div>
  </Section>
  <Section style={'w-screen h-screen bg-primary'} />
</div>
