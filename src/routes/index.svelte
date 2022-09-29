<script>
  import Header from '../components/header.svelte'
  import nick_cutout from '../../static/img/nick-cutout.png'
  import GreenTriangle from '../components/icons/green_triangle.svelte'
  import WhiteTriangle from '../components/icons/white_triangle.svelte'
  import Section from '../components/section.svelte'
  import Developer from '../components/icons/developer.svelte'
</script>

<div>
  <Section>
    <Header />
    <div class="absolute right-0 bottom-0">
      <GreenTriangle style={'w-[1000px] fill-primary'} />
    </div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2
      -translate-y-1/2">
      <Developer style={'w-[1400px]'} />
    </div>
    <div class="absolute right-32 bottom-0">
      <img src={nick_cutout} class="w-96" alt="" />
    </div>
    <div class="absolute bottom-28">
      <div
        class="ml-10 flex flex-col text-primary font-poppins font-bold text-5xl">
        <div class="mb-1">Hello!</div>
        <div class="mb-2">I'm Nick</div>
        <div class="btn btn-primary w-36">Work with me</div>
      </div>
    </div>
  </Section>
  <Section style={'w-screen h-screen bg-primary'}>
    <div class="relative">
      <div class="absolute right-0 top-0">
        <WhiteTriangle style={'w-[1000px] fill-primary'} />
      </div>
    </div>
  </Section>
</div>
