<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Survey App</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    @vite('resources/css/app.css')

</head>

<body class="bg-black text-white">
    <main class=" px-4 sm:px-[6.25rem]">
        <section class="flex justify-center lg:justify-between mt-[11.09rem]">
            <div class="w-full lg:w-[30.25rem]">
                <h2 class="font-montserrat text-center sm:text-start text-[3.75rem] font-bold">
                    Survey App <span class=" fill-none border-[#3A82EE] stroke-current" id="api">API</span> Architecture
                </h2>
                <p class="text-[1.25rem] text-center sm:text-start font-montserrat italic mt-[1.94rem]">Lorem ipsum
                    dolor sit amet,
                    consectetur
                    adipiscing
                    elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per.</p>
                <div class="flex justify-center sm:justify-start">
                    <button class="bg-[#3A82EE] text-[#FFFFFF] rounded-[0.9375rem] px-[1.25rem] py-[0.9375rem] flex gap-6 sm:gap-[5rem] mt-[1.94rem] font-inter text-[1.125rem] justify-center">Check
                        Out
                        Documentation <span><img src="{{ asset('./images/Vector.png') }}"></span></button>
                </div>

            </div>
            <div class="lg:w-[24.75rem] lg:h-[24.75rem] hidden lg:block">
                <img class="object-contain w-full h-full" src="{{ asset('./images/Vector1.png') }}" alt="image1">
            </div>
        </section>
        <section class="mt-[12.5rem]">
            <div class="w-full text-center">
                <h2 class="font-montserrat sm:text-[3.125rem] text-[2rem] font-[400] dark:text-[#FFF] uppercase sm:font-[600]">
                    project features
                </h2>
            </div>
            <div class=" flex lg:justify-between items-center mt-[4.38rem]">
                <div class=" lg:w-[30.125rem] h-[30.125rem] hidden lg:block">
                    <img class="object-contain w-full h-full rounded-[1.25rem]" src="{{ asset('./images/Woman wearing virtual reality simulator.png') }}" alt="image2">
                </div>
                <div class="w-full lg:w-[40.375rem] items-center">

                    <h4 class="sm:w-[28.6875rem] font-montserrat sm:font-500 sm:text-[1.875rem] font-[400] text-[1.8rem] sm:text-start text-center dark:text-[#FFF]">
                        Lorem ipsum
                        dolor sit amet</h4>
                    <div class=" flex border-[2px] dark:border-[#FFF] rounded-[1.25rem] p-[1.25rem] items-center justify-center mt-[2.12rem]">
                        <p class="font-montserrat sm:text-[1.5625rem] text-justify text-2xl dark:text-[#FFF] font-400">
                            Torem ipsum
                            dolor sit
                            amet, consectetur adipiscing elit. Nunc vulputate libero et
                            velit
                            interdum,
                            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per
                            inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
                            efficitur
                            neque.</p>
                    </div>

                </div>
            </div>
            <div class=" flex justify-between items-center mt-[4.38rem]">

                <div class="lg:w-[40.375rem] w-full items-center">

                    <h4 class="sm:w-[28.6875rem] font-montserrat sm:font-500 sm:text-[1.875rem] font-[400] text-[1.8rem] sm:text-start text-center dark:text-[#FFF]">
                        Lorem ipsum
                        dolor sit amet</h4>
                    <div class=" flex border-[2px] dark:border-[#FFF] rounded-[1.25rem] p-[1.25rem] items-center justify-center mt-[2.12rem]">
                        <p class="font-montserrat sm:text-[1.5625rem] text-justify text-2xl dark:text-[#FFF] font-400">
                            Torem ipsum
                            dolor sit
                            amet, consectetur adipiscing elit. Nunc vulputate libero et
                            velit
                            interdum,
                            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per
                            inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
                            efficitur
                            neque.</p>
                    </div>

                </div>
                <div class="w-[30.125rem] h-[30.125rem] hidden lg:block">
                    <img class="object-contain w-full h-full rounded-[1.25rem]" src="{{ asset('./images/Businessman pointing at his presentation on the futuristic digital screen.png') }}" alt="image2">
                </div>
            </div>
            <div class=" flex justify-between items-center mt-[4.38rem]">
                <div class="w-[30.125rem] h-[30.125rem] hidden lg:block">
                    <img class="object-contain w-full h-full rounded-[1.25rem]" src="{{ asset('./images/Woman wearing virtual reality simulator.png') }}" alt="image2">
                </div>
                <div class="lg:w-[40.375rem] w-full items-center">

                    <h4 class="sm:w-[28.6875rem] font-montserrat sm:font-500 sm:text-[1.875rem] font-[400] text-[1.8rem] sm:text-start text-center dark:text-[#FFF]">
                        Lorem ipsum
                        dolor sit amet</h4>
                    <div class=" flex border-[2px] dark:border-[#FFF] rounded-[1.25rem] p-[1.25rem] items-center justify-center mt-[2.12rem]">
                        <p class="font-montserrat sm:text-[1.5625rem] text-2xl text-justify dark:text-[#FFF] font-400">
                            Torem ipsum
                            dolor sit
                            amet, consectetur adipiscing elit. Nunc vulputate libero et
                            velit
                            interdum,
                            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per
                            inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
                            efficitur
                            neque.</p>
                    </div>

                </div>
            </div>
        </section>
        <section class="mt-[12.5rem]">
            <div class="text-center">
                <h4 class="uppercase  dark:text-[#FFF] font-montserrat text-[2rem] sm:text-[3.125rem] font-[700]">api
                    details</h4>
            </div>
            <div class=" mt-[2.5rem]">
                <p class="font-montserrat dark:text-[#FFF] text-[1.5rem] sm:text-[2.5rem] text-justify font-[600] capitalize sm:justify-normal">
                    Yorem
                    ipsum dolor sit
                    amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Curabitur tempus</p>
            </div>
        </section>
        <section class="mt-[12.5rem]">
            <div class="flex text-center lg:justify-between items-center border-2 border-[#3A82EE] p-4 sm:p-[3.06rem] rounded-[1.25rem]">
                <div class="lg:w-[32rem] lg:h-[22.375rem] relative hidden lg:block">
                    <div class="w-[9.375rem] h-[9.375rem] absolute top-[1.8rem]">
                        <img class="object-contain w-full h-full" src="{{ asset('./images/Group 1.png')}}" alt="HTML">
                    </div>
                    <div class="w-[9.375rem] h-[9.375rem] absolute bottom-[1.5rem] left-[5rem]">
                        <img class="object-contain w-full h-full" src="{{asset('./images/Group 2.png')}}" alt="CSS">
                    </div>
                    <div class="w-[9.375rem] h-[9.375rem] absolute bottom-[9rem] right-[5rem]">
                        <img class="object-contain w-full h-full" src="{{asset('./images/Group 3.png')}}" alt="JS">
                    </div>
                </div>
                <div class="justify-start sm:text-center sm:w-[44.0625rem]">

                    <h4 class="font-montserrat dark:text-[#FFF] text-[1.5rem] sm:text-[1.875rem] sm:font-[600] capitalize">
                        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                    </h4>

                    <p class="font-montserrat dark:text-[#FFF] text-[1rem] sm:text-[1.25rem] font-[400] italic capitalize mt-[1.25rem]">
                        Yorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                        aliquet
                        odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos
                        himenaeos. Curabitur tempus</p>


                    <div class="mt-[1.88rem] flex justify-center">
                        <button class="bg-[#3A82EE] text-[#FFFFFF] rounded-[0.9375rem] px-[1.25rem] py-[0.9375rem] flex gap-6 sm:gap-[12.56rem]  font-inter text-[1rem] sm:text-[1.125rem] font-[700]">
                            &lt;Frontend /&gt; <span><img class="" src="./img/Vector.png"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-[14.94rem]" id="team">
            <div class="text-center">
                <h2 class="font-montserrat text-[2rem] sm:text-[3.125rem] font-[700] capitalize text-[#FFF]">Meet the
                    team</h2>
            </div>
            <div class="mt-[2.5rem] bg-[#343434] sm:h-[43.125rem]">
                <div class="sm:flex justify-end sm:mr-[10.47rem]">
                    <div class="w-[8.92213rem] h-[2.8125rem] my-[3.7rem] hidden lg:block">
                        <img class=" object-contain w-full h-full" src="{{asset('./images/Group 6.png')}}" alt="arrow">
                    </div>
                </div>
                <div class="sm:flex lg:justify-between" style="overflow: hidden;">
                    <div class=" w-full sm:w-[50.5rem] sm:h-[22.4375rem] mb-[10.31rem] sm:ml-[6.25rem] sm:flex gap-[3.12rem] sm:items-center justify-center">
                        <div class="sm:w-[20rem] h-full">
                            <img class="w-full h-full object-contain rounded-[0.625rem]" src="{{asset('./images/unsplash_ILip77SbmOE.png')}}" alt="team">
                        </div>
                        <div class="sm:w-[22.375rem] text-center sm:text-start mt-2">
                            <h4 class="font-montserrat text-[2.1875rem] font-[600] text-[#FFF] capitalize">
                                Jordan 0x
                            </h4>
                            <p class="text-[#FFF] font-montserrat font-[500] italic capitalize mt-[1.88rem]">
                                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                            </p>
                            <p class="text-[#FFF] font-montserrat text-[1.5625rem] font-[600] capitalize mt-[1.25rem]">
                                <span> &#x2022; </span> Team Lead
                            </p>
                        </div>

                    </div>
                    <div class=" w-full sm:w-[50.5rem] sm:h-[22.4375rem] mb-[10.31rem] sm:ml-[6.25rem] sm:flex gap-[3.12rem] sm:items-center justify-center">
                        <div class="sm:w-[20rem] h-full">
                            <img class="w-full h-full object-contain rounded-[0.625rem]" src="{{asset('./images/unsplash_3TLl_97HNJo.png')}}" alt="team">
                        </div>
                        <div class="sm:w-[22.375rem] text-center sm:text-start mt-2">
                            <h4 class="font-montserrat text-[2.1875rem] font-[600] text-[#FFF] capitalize">
                                Jordan 0x
                            </h4>
                            <p class="text-[#FFF] font-montserrat font-[500] italic capitalize mt-[1.88rem]">
                                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                            </p>
                            <p class="text-[#FFF] font-montserrat text-[1.5625rem] font-[600] capitalize mt-[1.25rem]">
                                <span> &#x2022; </span> Team Support
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <footer class="mt-[10.06rem]">
            <div class="relative">
                <div class="w-full">
                    <img class="object-contain w-full h-full" src="{{asset('./images/Line 9.png')}}">
                </div>
                <div class="w-[1.15131rem] h-[1.15131rem]">
                    <img class="object-contain w-full h-full absolute bottom-1/2" src="{{asset('./images/Rectangle 28.png')}}">
                </div>
            </div>

            <div class="sm:flex sm:justify-center">
                <div class="mt-[1.25rem] p-[0.62rem] sm:w-[34.1093rem] w-full text-center">
                    <p class="font-montserrat sm:text-[1.25rem] text-[0.75rem] font-[600] capitalize">
                        All Rights Reserved TechStudio <span class="sm:ml-[1.25rem]"> &copy; &nbsp; Copyright
                            2023</span>
                    </p>
                </div>
            </div>
            <div class="flex justify-center ">
                <p class="flex font-montserrat text-[0.75rem] sm:text-[1.25rem] font-[600] capitalize">Designed by Kiane
                    <span class="ml-[1.25rem]"><img src="{{asset('./images/Vector3.png')}}" alt="kiane"></span>
                </p>
            </div>
        </footer>
    </main>
</body>

</html>
