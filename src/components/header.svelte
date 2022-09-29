<script>
  import Instagram from './icons/instagram.svelte'
  import Mail from './icons/mail.svelte'
</script>

<div class="flex flex-row justify-between pt-6 px-10">
  <div class="flex flex-row items-center">
    <a href="https://kreitzn.dev">
      <div class="text-primary font-poppins font-bold text-2xl">
        Kreitzn.dev
      </div>
    </a>
    <div class="text-primary font-poppins font-medium text-xl mx-2">|</div>
    <a href="/nmi">
      <div class="text-primary font-poppins font-medium text-xl">
        NMI Portfolio
      </div>
    </a>
  </div>
  <div class="flex flex-row">
    <a
      href="https://www.linkedin.com/in/nicholas-kreitz-3a13531a0/"
      target="_blank">
      <Instagram style={'w-5 h-5 fill-base-100'} />
    </a>
    <a href="mailto:nicholaskreitz@gmail.com">
      <Mail style={'w-5 h-5 fill-base-100'} />
    </a>
  </div>
</div>
