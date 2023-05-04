const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
  Mixed: "mixed",
}

export const yellowPerils = {
  artist1:{
    idx: 4,  // for internal use
    format: AllowedFormats.Video,  // for rendering
    visible: true,
    artist_name: "Love Intersections",
    ins_handle: ["@loveintersections"],  // a list b/c some artists have multiple handles
    quote: '“A core part of our recent practice as queer Chinese artists, has been exploring the relationship between our identities as queer Chinese artists, and how our anti-racist arts practice can work in solidarity with struggles to decolonize.”',
    bio: 'Love Intersections is a media arts collective made up of queer artists of colour dedicated to using collaborative art making and relational storytelling to address systemic racism in our communities. We produce intersectional and intergenerational stories from underrepresented communities of colour – centering the invisible, the spiritual, the metaphysical and the imaginary. We believe in deep and meaningful relationships, that intersectionality is a verb and a call to action, that we must cultivate social trust through collective care and community responsibility. Our desire is to provoke (he)artful social change through a lens of love.',
    topic_name: "Yellow Peril",
    collection_title:'',
    quote_bg_url: require('@/assets/YellowPerils/Love/YellowPeril.jpg'),
    description: "This video installation employs the metaphor of the Chinese Five Elements to explore the discursive formation of queer Chinese diasporic identity from a non-Eurocentric/Western point of departure. In Traditional Chinese Medicine, the Five Elemental forces provide many applications to understanding daily life, identity, and relationships in addition to physical, mental, and emotional health. The elements help to approach and understand ways of “being” through principles of metaphysics and temporalities. We invoke these five elements in this installation as a conduit to understanding queer East Asian cultural formations, not as an intellectual delineation, but to interpret our own embodiment of queer Chinese, diasporic identities.\n" +
        "\n" +
        "We performed an ancestral veneration ceremony at Larwill Park in Vancouver, which was the gathering site of the anti-Oriental riots of 1907 to mark an image of the temporal relationship that the project Yellow Peril: Queer Destiny has amongst a history of anti-Asian racism in Canada.  Giving offerings to our ancestors, reflecting on histories of colonization, founded upon systemic racism, and recognizing that these formations of anti-Asian racism and yellow peril exist to uphold imperialism - and never really goes away. Drawing on Simeon Mann and Dylan Rodriguez, Anti-Asian racism emerges when there’s an insecurity around the capitalist mode of production predicated on the seizure and extraction of Indigenous lands, and that anti-Asian violence is a structure to sustain racial devices inherent in racial capitalism and settler colonialism.\n" +
        "\n" +
        "Race, temporality, ancestry, and relationships to land are themes that we grapple with in this project. A core part of our recent practice as queer Chinese artists is exploring the relationship between our identities as queer Asian artists and how our anti-racist arts practice can work in solidarity with struggles to decolonize. We are particularly interested in the recent (re)emergence of Anti-Asian racism and community (and governmental) responses that lean towards identity based politics. We are interested in creating works that address systemic racism and colonization, and the roles that queer Chinese people play in undoing anti-Black and anti-Indigenous racism.",
    directory: "",
    artworks: {
      art1: {
        name: "Channeling the Elements; an encounter of time/space",
        year: '2020',
        medium: "Film",
        file_name: "https://www.youtube.com/embed/B91Fx_143Fk",
      },
    },
  },
  artist2:{
    idx: 7,  // for internal use
    format: AllowedFormats.Video,  // for rendering
    visible: true,
    artist_name: "Jamie Chi",
    ins_handle: ["@safedistance_docu", "@jamiechi_"],  // a list b/c some artists have multiple handles
    quote: '“A core part of our recent practice as queer Chinese artists, has been exploring the relationship between our identities as queer Chinese artists, and how our anti-racist arts practice can work in solidarity with struggles to decolonize.”',
    bio: "Jamie Chi (she/they) is an independent filmmaker and photographer, using her work to advocate for LGBTQ+ rights. After receiving an MA in cultural studies at Université Jean Moulin Lyon 3, France, Jamie advocated for Asian LGBTQ+ rights through her film. \n" +
        "\n" +
        "Jamie studied experimental filmmaking at the University of the Philippines Diliman in 2019 and was selected for the Ricky Lee Script Writing Program organised by the Cinemalaya Institute in 2021.  In 2022, her film 《Safe Distance: Chapter 1》won the Short Film Audience Award in the 33rd Hong Kong Lesbian and Gay Film Festival.",
    topic_name: "Yellow Peril",
    collection_title:'',
    quote_bg_url: '', 
    description: "",  // todo add description
    directory: "",
    artworks: {
      art1: {
        name: "Safe Distance",
        year: '',
        medium: "Film/Documentary",
        file_name: "https://www.youtube.com/embed/Jj5WbiY__Pw",
      },
    },
  },
  artist3:{
    idx: 10,  // for internal use
    format: AllowedFormats.Mixed, 
    visible: true,
    artist_name: "Andi Vicente",
    ins_handle: ["@andivice", "http://anakpublishing.ca/BitterMelanin.html"],  // a list b/c some artists have multiple handles
    quote: '“I identify as Queer, Non-Binary, Filipino/a/x, Ilocano, Isneg. To be seen by others like you can be a gift, a moment of euphoria. Sometimes it can bring about forced relationships. Solidarity is not simply based on the similar ways we experience oppression. Solidarity is compassionate.”',
    bio: 'Andi (they/them) is a visual artist whose interdisciplinary practice is humbled and radicalized by their work with different communities. Through installation and digital collage, they’ve explored intersectional identities, precarious livelihoods and the juxtaposition of movements. Andi aims to broaden an understanding of oppressed experiences and encourage collective empowerment through the answering of the questions “Who is not here with us and how can I be there for you?" Author and Editor of Bitter Melanin',
    topic_name: "Yellow Peril",
    collection_title:'',
    quote_bg_url: require('@/assets/YellowPerils/Andi/barbed_dreams.jpg'),  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "See more details by clicking the Link below." +  // todo add description
        "" +
        "The accompanying video for makibaka (to struggle and to fight) can be viewed <a href='https://youtu.be/t9qG14MSVPs'>here</a>.",
    directory: "/assets/YellowPerils/Andi",
    artworks: {
      art4: {
        name: "malgré eux (despite them)",
        year: '',
        medium: "",
        file_name: "despite_them.jpg",
      },
      art2: {
        name: "libération en fait (freedom actually _ release)",
        year: '',
        medium: "",
        file_name: "freedom_actually_release.jpg",
      },
      art3: {
        name: "makibaka (to struggle and to fight)",
        year: '',
        medium: "",
        file_name: "to_struggle_and_to_fight.jpg",
      },
      art1: {
        name: "barbed dreams",
        year: '',
        medium: "",
        file_name: "barbed_dreams.jpg",
      },
      art5: {
        name: "thank you [i learned of my legacy and my ancestors through the harms made by yours]",
        year: '',
        medium: "",
        file_name: "thank_you.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/despite_them.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/freedom_actually_release.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/to_struggle_and_to_fight.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/barbed_dreams.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/thank_you.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist4: {
    idx: 12,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Theysi Queers",
    ins_handle: [],  // todo: ins handles are in their descriptions
    quote: '“Being queer and South Asian can often feel like two diverging identities that are difficult to navigate simultaneously especially if you\'re also an immigrant.”',
    bio: '"Theysi Queers is a collective of artists, dreamers, makers, and creators in Tkaronto, dreaming of queer futures and realities in the South Asian diaspora.\n' +
        'Our mission is to visualize for you the joy of the realities we live in. We want to make real and give flesh to queer daydreams.\n' +
        'Each season, we will work within a theme to bring you a photo series showcasing collaborative talents of models, stylists, set designers, photographers, and all kinds of artists, and demonstrate what inspires us.\n' +
        'This season, we look to the written word for inspiration. We are lifting queer stories from the page and bringing you images inspired by our favourite stories."',
    topic_name: "Yellow Peril",
    collection_title: '',
    quote_bg_url: require('@/assets/YellowPerils/Theysi/6WhoWeAre.jpg'),  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "",
    directory: "/assets/YellowPerils/Theysi",
    artworks: {
      art1: {
        name: "Giovanni's Room by James Baldwin (1956)",
        year: '',
        medium: "",
        file_name: "1GiovannisRoom.jpg",
      },
      art2: {
        name: "A Suitable Boy by Vikram Seth (1993)",
        year: '',
        medium: "",
        file_name: "2ASuitableBoy.jpg",
      },
      art3: {
        name: "We Have Always Been Here: A Queer Muslim Memoir by Samra Habib (2019)",
        year: '',
        medium: "",
        file_name: "3WeHaveAlwaysBeenHere.jpg",
      },
      art4: {
        name: "Beyond the Gender Binary by Alok Vaid-Menon (2020)",
        year: '',
        medium: "",
        file_name: "4BeyondtheGenderBinary.jpg",
      },
      art5: {
        name: "Biker Gang Baddies",
        year: '',
        medium: "",
        file_name: "5BikerGangBaddies.jpg",
      },
      art6: {
        name: "Who We Are",
        year: '',
        medium: "",
        file_name: "6WhoWeAre.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/1GiovannisRoom.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/2ASuitableBoy.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/3WeHaveAlwaysBeenHere.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/4BeyondtheGenderBinary.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/5BikerGangBaddies.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/6WhoWeAre.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist5: {
    idx: 15,  // for internal use
    format: AllowedFormats.Video,
    visible: true,
    artist_name: "Hanxuan (Sophie) Jiang",
    ins_handle: [],
    quote: '“From sleeping together and uninhibited dancing to daily conversations, I seem to find out which community I am in and which community I am excluded from.”',
    bio: 'Hanxuan Jiang is a time-based artist and an art tutor who is currently based in Shanghai. She graduated from Ruskin School of Art, University of Oxford with Distinction (MFA). Her first MA was in Contemporary Art Practice of the Royal College of Art. In 2019, She was announced by Art News of China as one of the most excellent young artists in China (100 in total). Her moving image works were selected in European Short Film Festival, London Independent film Festival, Manchester film festival, 2019 Coventry Biennial, 9th International Video Poetry Festival, etc. Her artworks were collected by 2019 Florence Contemporary art Biennale, National Art Museum of China and Beijing Biennial.',
    topic_name: "Yellow Peril",
    collection_title: '',
    quote_bg_url: '',  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "Swinging on a seesaw, by the little beach,\n" +
        "In the midst of the verdant green space,\n" +
        "I find my own piece of paradise,\n" +
        "A sanctuary for my mind to embrace.\n" +
        "Gazing out at the lush greenery,\n" +
        "I yearn for a sense of inner peace,\n" +
        "But it eludes me, like a fleeting dream,\n" +
        "As I wander, searching for release.\n" +
        "I seek solace in the mountains and forests,\n" +
        "But perhaps it's just a false hope I chase,\n" +
        "For anxiety clings to me like a shadow,\n" +
        "As I navigate this uneasy society's maze.\n",
    directory: "",
    artworks: {
      art1: {
        name: "The Journey of Displacement",
        year: '',
        medium: "",
        file_name: "",  // todo: embed link from Vimeo
      },
    },
  },
  artist6: {  // todo: This is a spoken word and will feature a PDF file - check with Jolie re implementation - should i just take screen shots of the PDF and use the images?
    idx: 18,  // for internal use
    format: AllowedFormats.Text,
    visible: true,
    artist_name: "Anto Chan",
    ins_handle: ["@antopunfu", "@antowrites"],
    quote: '“The unfolding of self-discovery has been a lifetime of feeling as [if] I’m not enough. Consistently pleasing my family’s views on sacrifice and big picture living, left me disconnected from my reality and AUTHENTIC identity.”',
    bio: 'Anto is a queer HK Chinese-Canadian spoken word performance artist, writer, facilitator, entrepreneur, producer & caregiver. He performed his one-person show "Love So Far” at the Montreal Fringe Festival in 2019. He was featured on Toronto Fringe Community Booster Storytelling, Bell Fibe Raconteur Storytelling & the CBC’s the National.  He currently co-curates and hosts the variety show "FreeFlow Showcase”, and his poetry chapbook Romantic Reflections was released in 2020. In 2022, he received a grant from the Canada Council of the Arts for his project InnerGenerational: Trauma & Healing, that he performed during May’s Asian Heritage Month, Guelph Fringe Festival and Mississauga Fringe Festival for a total of 12 shows. He is passionate about mentoring the next generation of artists to overcome personal obstacles, leading to sharing their stories authentically. His life’s work is to create and support meaningful art that centres around the journey of growth, self-love and healing intergenerational trauma. He is currently studying Expressive Art Therapy with Create Institute, running 2 groups with University of Toronto Mississauga and Keystone Psychology (for Asian-Canadian population).',
    topic_name: "Yellow Peril",
    collection_title: 'Anto’s Spoken Words',
    quote_bg_url: '',  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "The unfolding of self-discovery has been a lifetime of feeling as if I'm not enough. Consistently pleasing my family’s views on sacrifice and big picture living, left me disconnected from my reality and identity. Only this past year have I fully accepted my queerness, including it in my art, my stories and sharing with friends/family. The deep joy that has come from stepping into my full self has been immeasurable, and “Biting the Peach” in all it’s glory transformed how I show up in the World. This includes the hairy outside that I’m mildly allergic to that makes my throat itchy, the soft juicy insides that makes a mess and the oddly shaped pit that I spend way too much time analyzing every time I eat one. I am sensitive, absolutely messy and overthinking each situation that arises, and my celebration of these truths helps me arrive fully for this complicated life I’m living. \n" +
        "\n" +
        "Unpacking Asian identity was a large part of the past couple years for me with my project InnerGenerational: Trauma and Healing. As was holding space for the Queer community, running a Bi+ Expressive Arts Therapy group and seeing clients in the Bi+ Arts Festival network. I have just begun publicly discovering the intersection of Asian and Queer identities, and this project feels like an incredibly valuable next step for me to step into the full experience of how these parts of myself align, conflict and make up who I am.",
    directory: "",
    artworks: {
      art1: {
        name: "",
        year: '',
        medium: "",
        file_name: "",
      },
    },
  },
  artist7: {
    idx: 19,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Snack Witch",
    ins_handle: [],
    quote: '“I see my experiments with [the translation of materials, text, images, and sound between physical and digital spaces] as a way to understand my in-betweenness: of nationalities, cultures, homes, gender, and languages.”',
    bio: '"🔮Snack Witch 🍡 is a Canadian-born Hong Kong-Chinese anglophone, queer woman and grateful, uninvited guest born—and knows she wants to die—on the unceded territories of the xʷməθkwəy̓əm, Skwxwú7mesh, Stó:lō, and Səl̓ílwətaʔ/Selilwitulh peoples. Her interdisciplinary practice investigates the relationship between objects↔place↔migration↔identities, always with humour, sometimes with food. 😉\n' +
        '\n' +
        'They’re currently toiling over their MFA on stolen lands of the Kanien’kehá:ka at Concordia University.  A wicked #magicalgirl ✨ eating art + making snacks 🌈⁠, she has exhibited and curated shows across Turtle Island, colonially known as Canada, including Centre CLARK, Montréal; Latitude 53, Edmonton; Xpace Cultural Centre, Toronto; and Hotam Press Bookshop & Gallery, Vancouver; among other spaces and platforms. Their work has been published nationally and internationally.\n' +
        '\n' +
        'They are a recipient of numerous awards, including the BC Arts Council Scholarship and the Dale and Nick Tedeschi Studio Arts Fellowship. She was waitlisted for the SSHRC - Joseph-Armand Bombardier: Canada Graduate Master’s Scholarship."',
    topic_name: "Yellow Peril",
    collection_title: '2033 Essex Rd, Williston, Vermont, USA, 05495',
    quote_bg_url: require('@/assets/YellowPerils/Snack/3snack.jpg'),
    description:  // todo description too long?
        "2033 Essex Rd, Williston, Vermont, USA, 05495 (2023 - ongoing) is inspired by a recent trip home to unceded territories of the xʷməθkwəy̓əm, Skwxwú7mesh, Stó:lō, Səl̓ílwətaʔ/Selilwitulh, colonially known as Vancouver, BC.\n" +
        " \n" +
        "On this trip, I observed that many small businesses installed new business signs and awnings directly over previous covers, layering new signs over the old ones without removing them. I see this as an act of interventionism: a queering of what has come before that conveys questionable practices of writing over the past. Perhaps it is a simple act of convenience on the part of business owners, but it demonstrates the enactment of a suspension in time that signifies how a singular space or parcel of land remains fixed to its physical location yet carries a multitude of meanings, purposes, and histories.\n" +
        " \n" +
        "With this in mind, I explore public signs as an active form of cross-generational communication, where signs inform and encourage viewers to participate and engage with their community while also becoming meaningful social stamps whose significance is shaped and derived by its audience. In this artwork, the restaurant awnings function in the way that printed matter “insist[s] on […] encounter[s]” by taking inspiration from Josh MacPhee who states that “[signs] gesture beyond the text on a page to a more-than, to publics to come. Banner making is a similar form of public/ation that is both community driven and a form of communication.”\n" +
        "  \n" +
        "Performing in parallel with Rebecca Solnit’s reflections on posters and artistic projects involving “public/ations”, my work acknowledges how temporal signs define and lay claim to physical spaces and inspire viewers to think of the past, present, and future not as a linear timeline but a continuous social project that is constantly being written. As stated by Stephanie Springgay in Feltness:\n" +
        " \n" +
        "The vitality of street posters [...] ‘when the walls wake up, they remind us of who we are, where we are . . .  that we are not alone, that others have gone before, and hope remains ahead’ (18). In an era of eroded public space, protest posters become ‘small gestures,’ [...] that keep alive the power of revolution and hope in the public sphere.\n" +
        " \n" +
        "What might initially be read as carelessness or laziness may actually be the complete opposite. Instead, the layering of signs could be an example of how one can care for those that came before, serving as a reminder that there will always be someone or something preceding or coming after. The question then becomes: How do we care for those who have yet to arrive while thanking the ones who paved desire lines for us to flourish in the various gestures we make everyday?\n",
    directory: "/assets/YellowPerils/Snack",
    artworks: {
      art1: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "1snack.jpg",
      },
      art2: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "2snack.jpg",
      },
      art3: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "3snack.jpg",
      },
      art4: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "4snack.jpg",
      },
      art5: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "5snack.jpg",
      },
      art6: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "6snack.jpg",
      },
      art7: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "7snack.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/1snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/2snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/3snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/4snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/5snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/6snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist8: {
    idx: 21,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Julie Tián",
    ins_handle: [],
    quote: '“I\'m aware that my Chinese upbringing contributed to my sense of responsibility and lack of boundaries, but I still struggle with navigating the individualistic and fragmented nature of North American queer communities.”',
    bio: 'Julie Chǔ Níng Tián is a self-taught Chinese-Canadian artist based in tkaronto. Her works explore themes of memory, space, time, and connection. She sees the intricate details often present in her works as a way of conveying care and love to the subject and the recipient. Julie has worked with various local organizations on projects surrounding art and queer belonging. She works primarily with oils, mixed paint, graphite, pen and ink, and embroidery.',
    topic_name: "Yellow Peril",
    collection_title: '2033 Essex Rd, Williston, Vermont, USA, 05495',
    quote_bg_url: require('@/assets/YellowPerils/Julie/JulieTian_3.jpg'),
    description: "",
    directory: "/assets/YellowPerils/Julie",
    artworks: {
      art1: {
        name: "níng nìng",
        year: '',
        medium: "",
        file_name: "JulieTian_1.jpg",
      },
      art2: {
        name: "níng nìng",
        year: '',
        medium: "",
        file_name: "JulieTian_2.jpg",
      },
      art3: {
        name: "níng nìng",
        year: '',
        medium: "",
        file_name: "JulieTian_3.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Julie/JulieTian_1.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Julie/JulieTian_2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Julie/JulieTian_3.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist9: {
    idx: 22,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Michelle Lu",
    ins_handle: ['@tiger___mommy'],
    quote: '“Until recently I\'ve been intimidated to explore the intersection of my ethnicity and queerness. I’m now recognizing that they have always been intricately intertwined and an essential part of who I am.”',
    bio: '"Michelle Lu (she/they) is a multidisciplinary designer and artist from Toronto, Canada. Her practice explores the nuances of identity, collaborative creation, and imagining new forms of community. Lu’s work is motivated by storytelling and the desire to make systems more equitable and accessible.\n' +
        '\n' +
        'Michelle’s work has been featured in exhibitions and publications nationally and internationally. They are also a founding member of here-there collective, a group of interdisciplinary artists who are currently working on the here-there audio archive – a community arts project and home for stories from the Asian Canadian diaspora."',
    topic_name: "Yellow Peril",
    collection_title: 'Mother’s Tongue',
    quote_bg_url: require('@/assets/YellowPerils/Michelle/mothers_tongue.jpg'),
    description: "Mother’s Tongue is a temporal sculpture and prose reflecting on the ever-changing nature of memory, identity, and tradition. Created in 2020 during a time of instability and discomfort, the tandem pieces explore finding solace in tradition, ritual, and food. This piece was originally conceived as a way to connect with my cultural ancestors but upon reevaluation, I recognize now I was also searching for connection with my queer ancestors. \n" +
        "\n" +
        "Mother’s Tongue is a manifestation of my discomfort with my queer identity. The sculpture consists of polymer clay dumplings encased in gelatine. The unstable fluid materiality of the gelatine captures my relationship to my queerness, meanwhile the encased clay dumplings are representative of my Asian identity. The two identities are frequently at odds with one another, existing in a state of suspension and tension. From the material tension of the sculpture to the underlying tension within my writing, both forms are trying to contain the multitudes of what is undefinable, capturing a moment in time and suspending it in space. \n" +
        "\t\n" +
        "Like my relationship to my identities, this piece is ever-shifting yet completely intertwined with one another: some pieces will hold firm but the overall shape will never be permanently fixed.",
    directory: "/assets/YellowPerils/Michelle",
    artworks: {
      art1: {
        name: "Mother’s Tongue",
        year: '',
        medium: "",
        file_name: "mothers_tongue.jpg",
      },
      art2: {
        name: "Mother’s Tongue",
        year: '',
        medium: "",
        file_name: "mt_w1.jpg",
      },
      art3: {
        name: "Mother’s Tongue",
        year: '',
        medium: "",
        file_name: "mt_w2.jpg",
      },
      art4: {
        name: "Mother’s Tongue",
        year: '',
        medium: "",
        file_name: "mt_w3.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Michelle/mothers_tongue.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Michelle/mt_w1.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Michelle/mt_w2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Michelle/mt_w3.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
}