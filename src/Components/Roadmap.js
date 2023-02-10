import React from 'react';
import './Roadmap.css'

const Roadmap = () => {
    return (
    <div>
        <div className='container border-yellow-400 rounded-md w-full relative md:mb-32'>
            <h2 className='textGradient font-FredokaOne md:text-6xl mb-8 md:mb-14 text-3xl'>Roadmap</h2>
                <p className='text-white text-md px-16 text-md mb-16 md:text-xl'>
                We understand that there's no true manual to running a successful project, this why we have made this roadmap to fit our community standards, we'll keep on updating.
                </p>
                {/* Roadmap Wrapper */}
           <div className='roadmap-wrapper flex-col justify-around space-y-10  '>
            <div className='w-1 bg-yellow-400 rounded-md h-[580px] absolute md:left-[530px]'></div>
            <div className='w-5 h-5 bg-white rounded-full absolute md:left-[522px] md:top-[262px]'></div>
            <div className='w-5 h-5 bg-white rounded-full absolute md:left-[522px] md:top-[475px]'></div>
            <div className='w-5 h-5 bg-white rounded-full absolute md:left-[522px] md:top-[690px]'></div>
            {/* Phase 1/2  */}
             <div className='md:flex gap-20 '>
               <div className='w-1/2 h-auto border border-yellow-400 rounded-md p-4 transition duration-500 hover:bg-[#deb617] '>
                    <h2 className='text-xl font-bold  text-white '>Phase 1</h2>
                    <p className='text-white text-start py-2 text-md'>Build community: Here, we'll go about collaborating with existing stronger communities from different chains and preach love to their ecosystems by spreading the evangelism of Sui.</p>
                </div>
                <div className='w-1/2 h-auto border border-yellow-400 rounded-md p-4 transition duration-500 hover:bg-[#deb617] '>
                    <h2 className='text-lg font-bold text-white'>Phase 2</h2>
                    <p className='text-white text-start py-2 text-md'>Light Movement: Here, all lighters will get to experience the movement by unleashing the light out of the darkness. The Nextlight will be transformed on Sui mainnet launch</p>
                </div>
             </div>
             {/* Phase 3/4 */}
             <div className='md:flex gap-20'>
               <div className='w-1/2 h-auto border border-yellow-400 rounded-md p-4 transition duration-500 hover:bg-[#deb617] '>
                    <h2 className='text-xl font-bold  text-white '>Phase 3</h2>
                    <p className='text-white text-start py-2 text-md'>Casino: There will be no boredom after the birth of the lighters, they will have to live and enjoy the moments of nature. The Nextlight will have their own custom-built game, a game for all. There'll be a casino consisting of roulette, flip coin and a coin multiplier. This will be our main focus.</p>
                </div>
                <div className='w-1/2 h-auto border border-yellow-400 rounded-md p-4 transition duration-500 hover:bg-[#deb617] '>
                    <h2 className='text-lg font-bold text-white'>Phase 4</h2>
                    <p className='text-white text-start py-2 text-md'>Rewards: There's no fun without rewards whereby 70% from our royalties will be shared to our holders, just for the fun of it. All our Holders will get to enjooooooy these benefits, just by holding our NFT which will also be your pass to everything that will be partaking from us.</p>
                </div>
             </div>
             {/* Phase 3/4 end */}

            {/* phase 5/6  */}
             <div className='md:flex gap-20'>
               <div className='w-1/2 h-auto border border-yellow-400 rounded-md p-4 transition duration-500 hover:bg-[#deb617] '>
                    <h2 className='text-xl font-bold  text-white '>Phase 5</h2>
                    <p className='text-white text-start py-2 text-md'>$Light: This will be the official economy power for the lighters. This will be spent on all the daily activities evolving on our metaverse.</p>
                </div>
                <div className='w-1/2 h-auto border border-yellow-400 rounded-md p-4 transition duration-500 hover:bg-[#deb617] '>
                    <h2 className='text-lg font-bold text-white'>Phase 6</h2>
                    <p className='text-white text-start py-2 text-md'>Dark light: This will be our Gen 2 collection for the Nextlight.</p>
                </div>
             </div>
             {/* phase 5/6 end */}
            </div>
            {/* wrapper end */}
        </div>
    </div>
    );
};

export default Roadmap;