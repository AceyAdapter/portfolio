<script>
  import Header from '../components/header.svelte'
  import nick_cutout from '../../static/img/nick-cutout.png'
  import stats_card from '../../static/img/stats-card.png'
  import GreenTriangle from '../components/icons/green_triangle.svelte'
  import WhiteTriangle from '../components/icons/white_triangle.svelte'
  import Section from '../components/section.svelte'
  import Developer from '../components/icons/developer.svelte'
  import Cta from '../components/cta.svelte'
</script>

<div>
  <Header />
  <Cta />
  <div class="lg:mb-[-86px]">
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
          class="lg:ml-20 flex-col text-primary font-poppins font-bold
          xl:text-6xl text-5xl">
          <div class="mb-1">Hello!</div>
          <div class="mb-10">I'm Nick.</div>
        </div>
      </div>
    </Section>
  </div>
  <Section style={'w-screen h-screen bg-primary mt-[-86px]'}>
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
            href="/nmc"
            class="border-2 border-primary mt-5 rounded-2xl text-lg h-10 w-40
            lg:w-48 bg-base-100 text-primary font-bold font-poppins flex
            justify-center items-center hover:bg-base-200">
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
  <Section style={'w-screen h-96 bg-base-100'}>
    <div class="h-full w-full flex flex-col justify-center items-center">
      <div class="lg:text-3xl text-xl text-[#6b6a71] font-poppins font-bold">
        Have ideas? Need a partner?
      </div>
      <a
        href="/contact"
        class="mt-5 rounded-2xl text-lg h-10 w-48 lg:w-60 bg-primary
        text-base-100 font-bold font-poppins flex justify-center items-center">
        Let's Work Together
      </a>
    </div>
  </Section>
</div>
