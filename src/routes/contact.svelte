<script>
  import Wave from '../components/wave.svelte'
  import nick_pic from '../../static/img/closeup.png'
  import Header from '../components/header.svelte'
  import Section from '../components/section.svelte'
</script>

<style>
  @keyframes delayed_spin {
    0%,
    20%,
    40% {
      transform: rotate(0deg);
    }
    90% {
      transform: rotate(360deg);
    }
  }

  .spin-delay {
    animation: delayed_spin 10s infinite;
  }
</style>

<Header initTransparent={true} />

<Section style={'h-screen w-screen bg-primary'}>
  <div class="h-3/4 w-full flex flex-col justify-center items-center">
    <div
      class="card lg:w-96 w-80 border-2 border-primary bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <div class="avatar">
          <div
            class="w-36 rounded-full ring ring-primary ring-offset-base-100
            ring-offset-2">
            <img src={nick_pic} alt="nick headshot" />
          </div>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Want to reach out?</h2>
        <div class="flex flex-row items-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nicholas-kreitz-3a13531a0/"
            class="w-8 spin-delay fill-primary hover:fill-secondary mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480
                31.9 480H416c17.6 0 32-14.5
                32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4
                416H69V202.2h66.5V416zm-33.2-243c-21.3
                0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5
                38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1
                243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9
                54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5
                67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a
            href="mailto:kreitz.dev@gmail.com"
            class="w-8 spin-delay fill-primary hover:fill-secondary mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3
                492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2
                150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48
                64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512
                176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0
                384V176L217.6 339.2z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/kreitzn_"
            class="w-8 spin-delay fill-primary hover:fill-secondary mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0
                138.72-105.583 298.558-298.558 298.558-59.452
                0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34
                1.299 49.055 0 94.213-16.568
                130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974
                12.995 1.624 19.818 1.624 9.421 0 18.843-1.3
                27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969
                7.797 30.214 12.67 47.431
                13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492
                5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365
                109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828
                46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67
                33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798
                24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122
                60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://t.me/aceyadapter"
            class="w-8 spin-delay fill-primary hover:fill-secondary mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

</Section>
