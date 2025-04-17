


import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full px-4 sm:px-6 md:px-12 py-10 bg-[#021c3f] text-[#cfa9e8]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-6">
          <Link href="/">
            <button className="text-3xl py-2 hover:text-cyan-400 transition duration-200">
              <code className="neon-text">Grace Liu <span className="text-[#ffeead]">٩(＾◡＾)۶ </span></code>
            </button>
          </Link>
          <div className="flex flex-wrap justify-end gap-2 text-sm sm:text-base">
            <a href="https://www.linkedin.com/in/gracebyliu/" target="_blank" className="px-2 py-1 hover:text-pink-400 transition duration-200">
              <code>{'{'}say hi{'}'}</code>
            </a>
            <a href="https://github.com/graceliu1" target="_blank" className="px-2 py-1 hover:text-blue-400 transition duration-200">
              <code>{'{'}github{'}'}</code>
            </a>
            <a href="/extra" className="px-2 py-1 hover:text-purple-400 transition duration-200">
              <code>{'{'}extra{'}'}</code>
            </a>
          </div>
        </div>

       

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-2 my-15">
          <div className="p-6 rounded-md border border-[#bfdfa2] bg-[#021c3f] shadow-[0_0_10px_#bfdfa2cc]">
            <button className="text-lg mb-4 text-[#bfdfa2]">
              <code>{'{'}origin{'}'}</code>
            </button>
            
                <p className="space-y-1 text-sm">
                    I. <br />
                    I am the daughter of two tigers. <br />
                    My mother rubs bitter spice between her fingers, <br />
                    her fortunes cradled in ginger embraces <br />
                    She tells me of a Goddess’s flour-streaked hands <br />
                    neatly birthing <em>zong zi </em> children, fated to drown <br />
                    in riverboats of dried bamboo leaves. <br />
                    I recall: a Monkey King dancing in peach nectar, <br />
                    sunflower seeds cracked between wobbly teeth, <br />
                    tiger balm staining my elbows forest-green. <br />
                    My mother searches within the Buddha’s face,  <br />
                    on her lonesome altar.
                    I look for answers in the <br />
                    curve of her crescent smile. <br />
                    <br />

                    II. <br />
                    I am the lover of the half-melted mango sun. <br />
                    On the fullest moon, I gulp down salted egg yolks, <br />
                    devour crushed sesame and lotus paste in the dark. <br />
                    My grandfather palms his precious jade elephants; <br />
                    his memories flickering and fading like a damp mirage. <br />
                    Reluctant, I face: the city of western luxuries, <br />
                    thrones of past emperors (and their conquerors), <br />
                    my too-tight  <em>qi pao</em> left on the floor. <br />
                    My world beckons beyond Terminal 3. <br />
                    (I shed skin from the past twenty-eight days.) <br />
                    Two tigers and I fly into the horizon.

                </p>
                <br />
                <code className="text-xs mb-1">&copy; 2021 Grace Liu</code><br />
          </div>
          <div className="p-6 rounded-md border border-[#bfdfa2] bg-[#021c3f] shadow-[0_0_10px_#bfdfa2cc]">
          <button className="text-lg mb-4 text-[#bfdfa2]">
              <code>{'{'}bathhouse{'}'}</code>
            </button> 
            <p className="space-y-1 text-sm">
                
                <em>a yi</em> scrubs, hard. 		wisps of grey silt
                her pink sponge roughens  		trail down her neck
                the surface of my back, 		follow their track 
                a soft yellow peach 			down the curve of her spine,
                with tender, rosy skin. 		up to the slope of her smile
                damp with condensation 		where humid clouds rise,
                (or the  tears 			shrouding her visage 
                of a thousand plucked 		in cloudy silk.
                lotus blossoms 			raised eyes, glance 
                mourning the dawn). 		across a slippery Canyon.

                rivulets of jujube milk 		slate sand swirls 
                trail down my arms, 			around her crown
                i lay still in an indent		of sesame-black hair,
                fidgeting, shivering, 			glimpses of moon-pale skin.
                but somehow warm.			an empress of rice fields
                through familiar chatter		speaks a plea for mercy.
                i hear the thundering of 		the Goddess demands
                water. through the steam,		eight hundred eighty-eight 
                i see an army / audience		tea leaves await steeping
                beckon me 				she steps out of the spring

                the scalding water 			did she lay here once?
                rushes over my limbs.		under this roof built with tiles
                free of dust and dead cells, 		older than a thousand years? 
                i believe i am either:			the curtains of water form 
                a butterfly emerging			strands so thick and fine
                or the cocoon left behind		almost like her hair.
                </p>
                <br />
                <code className="text-xs mb-1">&copy; 2021 Grace Liu</code><br />
                </div>
               
                
        </div>
      </div>
      <footer className="mt-20 text-center text-xs text-[#b3d3f5]">
        <code className="mb-1">&copy; Grace Liu</code><br />
        <code className="text-[0.6rem] mb-1">Theme: VSCode Tomorrow Night Blue</code>
      </footer>
    </main>
  );
}


// // app/extra/page.tsx
// import Link from "next/link";

// export default function ExtraPage() {
//     return (
//       <main className="min-h-screen w-full px-4 sm:px-6 md:px-12 py-10 bg-white text-black">
//         <div className="max-w-4xl mx-auto">
//             {/* Header */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//                 <Link href="/">
//                     <button className="text-3xl py-2 px-4">
//                     <code>Grace Liu ٩(＾◡＾)۶</code>
//                     </button>
//                 </Link>
//                 <div className="flex flex-wrap justify-end gap-2 text-sm sm:text-base">
//                     <a href="https://linkedin.com/in/grace-l-2b1a9218a" target="_blank" className="px-2 py-1"><code>{'{'}say hi{'}'}</code></a>
//                     <a href="https://github.com/graceliu1" target="_blank" className="px-2 py-1 "><code>{'{'}github{'}'}</code></a>
//                     <a href="/extra" className="px-2 py-1"><code>{'{'}extra{'}'}</code></a>
//                 </div>
//             </div>
//             <div className="p-6 rounded-md border border-gray-200">
//                 <button className="text-lg mb-2">
//                 <code>{'{'}origin{'}'}</code>
//                 </button>
//                 <ul className="space-y-1 text-sm">
//                 I. <br />
//                 I am the daughter of two tigers. <br />
//                 My mother rubs bitter spice between her fingers, <br />
//                 her fortunes cradled in ginger embraces <br />
//                 She tells me of a Goddess’s flour-streaked hands <br />
//                 neatly birthing <em>zong zi </em> children, fated to drown <br />
//                 in riverboats of dried bamboo leaves. <br />
//                 I recall: a Monkey King dancing in peach nectar, <br />
//                 sunflower seeds cracked between wobbly teeth, <br />
//                 tiger balm staining my elbows forest-green. <br />
//                 My mother searches for answers  <br />
//                 within the Budda’s face, on her lonesome altar. <br />
//                 I look for them in the curve of her crescent smile. <br />
//                 <br />

//                 II. <br />
//                 I am the lover of the half-melted mango sun. <br />
//                 On the fullest moon, I gulp down salted egg yolks, <br />
//                 devour crushed sesame and lotus paste in the dark. <br />
//                 My grandfather palms his precious jade elephants; <br />
//                 his memories flickering and fading like a damp mirage. <br />
//                 Reluctant, I face: the city of western luxuries, <br />
//                 thrones of past emperors (and their conquerors), <br />
//                 my too-tight  <em>qi pao</em> left on the floor. <br />
//                 My world beckons beyond Terminal 3. <br />
//                 (I shed skin from the past twenty-eight days.) <br />
//                 Two tigers and I fly into the horizon.

//                 </ul>
//             </div>
//         </div>
//       </main>
//     );
//   }