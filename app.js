
const a =[]
const b =[]
const result =[]



function randomIntFromInterval() { // min and max included 
    let word =[
        'surround',
        'consider',
        'discord',
        'significant',
        'enjoyable',
        'attractive',
        'amount',
        'torture',
        'deliver',
        'illegible',
        ' maid',
        ' representative',
        'achievement',
        ' reliable',
        ' rely on',
        ' promise',
        'temper',
        'inhospitable',
        ' hospitable',
        ' initial',
        ' amusing',
        'suffer from',
        'otherwise',
        'break off',
        'assist',
        ' trouble',
        'greet',
        `smart`,
        `tiresome`,
        `charming`,
        `graceful`,
        `rare`,
        `rarely`,
        `fortune`,
        ` fate-tale`,
        `affect`,
        `influence`,
        ` fair`,
        ` reasonable`,
        `therefore`,
        ` defendant`,
        ` guilty`,
        `fraud`,
        `unconscious`,
        `ashamed`,
        `innocent`,
        `shy`,
        `embarrassed`,
        `regret`,
        `regretful`,
        `easy- going`,
        `generation`,
        ` resource`,
        `close`,
        `in order`,
        `abundance`,
        `astonish`,
        ` concern`,
        ` descendant`,
        `wonder`,
        `boundary`,
        `concerned`,
        `remarkable`,
        `plain`,
        `dense`,
        ` thick`,
        ` ambition`,
        ` garbage`,
        `property`,
        ` consciousness`,
        `enlightenment`,
        ` own`,
        ` to be aware of`,
        ` statement`,
        ` description`,
        ` capable`,
        ` steal`,
        `decide`,
        ` decision`,
        ` situation`,
        `greedy`,
        `bound`,
        `distinguish`,
        ` predictability `,
        `be engaged in`,
        `infancy`,
        `infant`,
        ` entire`,
        `pattern`,
        ` vary`,
        `approximately`,
        ` assigned`,
        ` create`,
        `significance `,
        ` to be banned`,
        `fortunately`,
        `luckily /happily`,
        `unfortunately`,
        `unluckily/unhappily`,
        ` immense`,
        `threaten`,
        `diversion`,
        ` degrade`,
        `overuse`,
        `abundance`,
        `forbid`,
        ` lack`,
        `desire`,
        `defend`,
        ` supply`,
         `curious`   ,
         `appreciate`,
         `unfair`,
         `bravery`,
         `generosity`,
         `cowardice`,
         `charitable`,
         `suspicious`,
         `gifted`,
         `ordinary`,
          `divide`,
          `judge`,
          `according to`,
          `slave`,
          `compete`,
          `include`,
          ` to be held`,
          `promote`,
          `understanding`,
          `misunderstanding`,
          `nation`,
          `notion`,
          `essential`,
          `integral`,
          `contain`,
          `complain`,
          `be pleased`,
          `exclude`,
          `choose`,
          `vacancy`,
          `fortnight`,
          `fellow`,
          `follow`,
          `broad`,
          `broaden/expand`,
          `award`,
          `regulate`,
          `adjust`,
          `self- confidence `,
          `doubt`,
          `justify`,
          `certain`,
          `approved of`,
          `praise`,
          `scold/ tell off/ rebuke`,
          `capture`,
          `fetch`,
          `content`,
          `occupy`,
          `release/set free`,
          `cancel`,
          `in advance`,
          `regret`,
          `plunder`,
          `precede`,
          `lakeshore`,
          `reflect`,
          `uninhabited`,
          `inhabit`,
          `mainland`,
          `harmful`,
          `harmless`,
          `excuse`,
          `action`,
          `research`,
          `researcher`,
          `explore`,
          `explorer`,
          `discovery`,
          `advantage`,
          `disadvantage`,
          `step`,
          `approach`,
          `come up to`,
          `an approach (to)`,
          `to walk up (to)`,
          `to drive up (to)`,
          `sign`,
          `distract`,
          `essential`,
          `therefore`,
          `temperament`,
          `soar`,
          `maturity`,
          `discord`,
          `suitable / convenient`,
          `inconvenient`,
          `statement`,
          `description`,
          `sensible`,
          `adult`,
          `manner`,
          `rate`,
          `gain`,
          `gather`,
          `defraud`,
          `fraud`,
          `waste`,
          `accept`,
          `acceptance`,
          `deal with`,
          ` leave the rest`,
          `purse`,
          `wallet`,
          `adopt`,
          `admit`,
          ` persuade/convince`,
          `wise(ly)`,
          `spend (on)`,
          `depend (on)`,
          `damage`,
          `power lines`,
          `in spite of /despite`,
          `in stead of`,
          `delightful`,
          `claim`,
          `soften`,
          `excusable`,
          `inexcusable`,
          `error`,
          `dizzy`,
          `to be eager`,
          `afford`,
          `to be aware( of) `,
          `involve`,
          `vehicle`,
          `fault`,
          `faulty`,
          `repair`,
          `recover`,
          `measure`,
          `fail`,
          `failure`,
          `possible`,
          `conclusion`,
          `describe`,
          `local`,
          `fill`,
          `fill in`,
          `candidate`,
          `dismiss`,
          `reject`,
          `object (to) `,
          `mind`,
          `require`,
          `demand`,
          `prefer (to)`,
          `spare time`,
          `fluent(ly)`,
          `enrich`,
          `enhance`,
          `involve`,
          `manage`,
          `jogging`,
          `relieve`,
          `overcome`,
          `attitude`,
          `avoid`,
          `delay`,
          `decay`,
          `insist (on)`,
        `prevent`,
        `reduce`,
        `diminish`,
        `decrease`,
        `communication`,
        `interrupt`,
        `express`,
        `opinion`,
        `issue`,
        `private`,
        `inappropriate`,
        `directly`,
        `discuss`,
        `sensitive`,
        `disagreement`,
        `controversy`,
        `slightly`,
        `influence`,
        `relax`,
        `sacrifice`,
        `betray`,
        `bright`,
        `unfaithful`,
        `furious`,
        `exactly`,
        `stubborn`,
        `moody`,
        `divorce`,
        `needy`,
        `victorious`,
        `sociable`,
        `tidy`,
        `neat`,
        `ignorant`,
        `ignorance`,
        `illiterate`,
        `illiteracy`,
        `internal`,
        `experienced`,
        `unskilled`,
        `obey`,
        `burglar`,
        `fascinating`,
        `challenge`,
        `bribe`,
        `bribery`,
        `custom`,
        `customs`,
        `attend`,
        `take part in/ participate in`,
        `awareness`,
        `legislation`,
        `advisable`,
        `attitude`,
        `cure`,
        `bring up`,
        `indifferent`,
        `discourage`,
        `encourage`,
        `completely`,
        `fluent`,
        `cheerful`,
        `joyful`,
        `praise`,
        `inspire`,
        `unique`,
        `stage`,
        `inhabitant`,
        `throughout`,
        `expand`,
        `industrialize`,
        `survive`,
        `succeed`,
        `identity`,
        `protect`,
        `maintain`,
        `cultivate`,
        `crop`,
        `rural`,
        `remain`,
        `remainder`,
        `reservation`,
        `preserve`,
        `grow`,
        `community`,
        `dreary`,
        `assert`,
        `retain`,
        `heritage`,
        `annoy`,
        `satisfy`,
        `concern`,
        `concerned`,
        `worry`,
        `carelessness`,
        `apologize`,
        `frighten`,
        `demand`,
        `withdraw`,
        `require`,
        `propose`,
        `purpose`,
        `on purpose`,
        `disturb`,
        `check`,
        `perish`,
        `cause`,
        `probably`,
        `attribute`,
        `malnutrition`,
        `obtain`,
        `adequate`,
        `cushioning`,
        `manage`,
        `phase`,
        `settlement`,
        `settle`,
        `responsibility`,
        `responsible`,
        `irresponsible`,
        `polite`,
        `impolite`,
        `noble`,
        `nobility`,
        `patience`,
        `patient`,
        `impatient`,
        `receive`,
        `criticize`,
        `scold`,
        `rebuke`,
        `suppose`,
        `offer`,
        `suggest`,
        `proposal`,
        `propose`,
        `existence`,
        `improve`,
        `modest`,
        `boastful`,
        `quarrel`,
        `involve`,
        `effort / attempt`,
        `attempt`,
        `harm`,
        `hurt`,
        `attention`,
        `pollute`,
        `reach`,
        `common`,
        `goal`,
        `target`,
        `achieve`,
        `self-confident`,
        `persuade / convince`,
        `determine`,
        `vision`,
        `solution`,
        `particular`,
        `prepare`,
        `arrange`,
        `hesitant`,
        `certain`,
        `uncertain`,
        `determination`,
        `aid`,
        `describe`,
        `avoid`,
        `pursuit`,
        `pursue`,
        `selfish`,
        `slippery`,
        `hide`,
        `conceal`,
        `crime`,
        `safe`,
        `unsafe`,
        `entertain; amuse`,
        `represent`,
        `contest`,
        `announce`,
        `knock`,
        `accurate`,
        `side effects`,
        `emergency`,
        `exceed`,
        `kindness`,
        `exploitation`,
        `justice`,
        `injustice`,
        `agression`,
        `treatment`,
        `prosperity`,
        `violence`,
        `profit`,
        `retire`,
        `introduce`,
        `frequently`,
        `opportunity`,
        `habit`,
        `accustom`,
        `to be accustomed to`,
        `bunch`,
        `splendid`,
        `order`,
        `command`,
        `last`,
        `continue`,
        `go on`,
        `cheat`,
        `deceive`,
        `boast`,
        `hastily`,
        `enlarge`,
        `gently`,
        `offend`,
        `profitable`,
        `qualification`,
        `competitive`,
        `spirit`,
        `ancient`,
        `major`,
        `religious`,
        `rivalry`,
        `separate`,
        `cross-cultural`,
        `wrinkle`,
        `enable`,
        `enabled`,
    ]

    let aze =[ `əhatə etmək`, 
    `düşünmək, hesab etmək`,
    `nifaq,ixtilaf`,
    `mühüm, əhəmiyyətli, önəmli`,
    `xoş,gözəl`,
    `cəlbedici`,
    `miqdar`,
    `işgəncə, əzab`,
    `çatdirmaq `,
    `qeyri-qanuni;oxunmaz`,
    `qulluqçu,xadimə`,
    `nümayəndə`,
    `nailiyyət,uğur`,
    `etibarlı,inamlı`,
    `-etibar etmək,bel bağlamaq`,
    `söz vermək`,
    `xasiyyət;yüngülləşdirmək`,
    `qonaqsevməz`,
    `qonaqpərvər`,
    `ilkin`,
    `əyləncəli`,
    `əziyyət çəkmək`,
    `başqa cür,əks təqdirdə, yoxsa`,
    `kəsmək, dayandırmaq`,
    ` yardım,kömək etmək`,
    `narahatlıq`,
    ` salamlamaq, qarşılamaq
    `,
    ` 
    zirək,zehinli,yaxşı görünüşlü
    `,
    ` yorucu,bezdirici `,
    `cazibədar, cəzbedici`,
    `
    zərif,nəfis`,
    `seyrək`,
    ` nadir halda`,
    `
    bəxt,tale; var-dövlət`,
    ` bəxt`,
    `təsir etmək`,
    `təsir etmək`,
    `ədalətli; sarışın; yarmarka`,
    ` idraklı,ağlabatan; münasib`,
    `
    nəticədə; buna görədə`,
    ` müttəhim , təqsirkar`,
    `günahkar`,
    ` fırıldaqçılıq; k ələkbaz; aldatmaq`,
    ` düşüncəsiz; bihuş;bixəbər`,
    ` utancaq;xəcalətli`,
    ` günahsız , məsum, pak`,
    ` utancaq`,
    ` çaşqın; xəcalətli`,
    `peşman olmaq;peşmanlıq`,
    `təəssüflü `,
    ` yolagedən`,
    `nəsil`,
    ` imkan;vəsait; bacarıq `,
    `yaxın ,baglamaq `,
    ` üçün ,ondan ötrü`,
    ` bolluq, bərəkət,coxluq`,
    ` heyrətləndirmək`,
    ` qayğı; maraq, narahat olmaq`,
    `nəsil,kök`,
    `təəccüb etmək;görəsən; möcüzə`,
    `sərhəd; hüdud `,
    `narahat`,
    ` görkəmli;əlamətdar `,
    ` düzənlik; aşkar; sadə; çirkin `,
    ` sıx`,
    ` sıx; qalın `,
    `  şöhrətpərəstlik; can atma,meyl`,
    ` tullantı, zibil`,
    ` mal, əmlak `,
    `şüur`,
    ` maariflənmə, maarifçilik`,
    `
    şəxsi, öz; sahiblənmək`,
    ` şüurunda olmaq; agah olmaq `,
    `bəyanat; təsdiq etmə`,
    ` təsvir`,
    ` qadir , bacarıqlı, qabiliyyətli`,
    ` oğurlamaq`,
    `qərara gəlmək`,
    `qərar`,
    `vəziyyət ; hal`,
    `tamahkar, acgöz`,
    `hədd qoymaq; serhed; sıçramaq `,
    `
    fərqləndirmək`,
    ` qabaqcadan;ön görmə
    `,
    `
    məşğul olmaq`,
    ` körpəlik`,
    ` körpə`,
    ` bütöv; tam`,
    `model; naxış; nümunə; şablon `,
    `
    dəyişmək, fərqləndirmək `,
    `
    təxminən`,
    `
    təyin; təyin etmək`,
    ` yaratmaq`,
    `
    əhəmiyyət; önəmlilik `,
    `qadağan olunmuş `,
    `xoşbəxtlikdən, yaxşı ki`,
    `xoşbəxtlikdən, yaxşı ki`,
    `
    bədbəxtlikdən; təəssüf ki`,
    `
    bədbəxtlikdən; təəssüf ki`,
    `möhtəşəm; hədsiz`,
     `qorxutmaq,hədələmək`,
     `
     təxribat;yayındırma`,
     `alçaltmaq `,
     `arıq ; həddən artıq istifadə etmək`,
     ` bolluq, bərkət`,
     ` qadağan; qadağan etmək `,
     `əksiklik`,
     `arzu, istək, nəfs, könül `,
     ` müdafiə ; müdafiə etmək `,
     `
     təchizat; təchiz etmək`,

      ` maraqlı ;qəribə
      `,
      ` qiymətləndirmək ; qədrini bilmək `,
      `
      ədalətsiz`,
      ` igidlik ;cəsarət`,
      `
      səxavət ; alicənablıq `,
      `qorxaqlıq`,
      ` xeyriyyə`,
      ` şübhəli`,
      `qabiliyyətli, qabil `,
      ` adi, sıravi `,

       ` bölmək`,
       ` hakim, münsif, mühakimə etmək`,
       `
       əsasən`,
       ` qul`,
       `yarışmaq`,
       ` daxil etmək; ehtiva etmək`,
       ` keçirmək( yaris/oyun və. S`,
       `rütbəsini artırmaq, böyütmək; təşviq `,
       `anlayış `,
       ` anlaşılmazlıq`,
        ` millət ,xalq, ümmət, camaat `,
        ` anlayış; fikir `,
        ` mühim ;əsas; zəruri `,
        ` mühim ;əsas; zəruri `,
        `ehtiva etmək; tutmaq `,
        `şikayət etmək`,
        ` məmnun olmaq`,
        ` istisna etmək `,
        ` seçmək`,
        ` boş iş yeri`,
         ` 2 həftə`,
         `oğlan; gənc `,
         ` izləmək; əməl etmək `,
         `geniş`,
         `genişləndirmək`,
         `təltif etmək`,
         `yerbəyer etmək `,
         `uyğunlaşdırmaq`,
         ` özünə inam`,
         `şübhə; şübhə etmək `,
          ` haqq qazandırmaq; doğrultmaq`,
          `dəqiq; əmin; müəyyən`,
          ` təsdiqləmək`,
          `tərifləmək`,
          `danlamaq; məzəmmət etmək`,
          `tutmaq; zəbt etmək; ələ keçirmək`,
          `gətirmək`,
          ` məzmun ; razı; xoşnud; yarıtmaq
          `,
          ` işğal etmək; zəbt etmək`,
          ` azad etmək `,
          ` ləğv etmək`,
          `əvvəlcədən; qabaqcadan `,
          `təəssüf ; peşmanlıq; peşman olmaq `,
          `qənimət; talan; qarət etmək `,
          `qabaq olmaq`,
          `göl sahili `,
          `əks etdirmək`,
          `boş ; məskunlaşmamış `,
          `yaşamaq`,
          `qitə ; materik`,
            `zərərli`,
            `zərərsiz`,
            `bəhanə ; üzr`,
            `hərəkət ; fəaliyyət ; rəftar`,
            `tədqiqat ; araşdırma `,
            `tədqiqatçı `,
            `araşdırmaq; tədqiq etmək`,
            `tədqiqatçı`,
            `kəşf`,
            `fayda ; üstünlük `,
            `ziyan; çatışmazlıq`,
            `addım; pillə`,
            `yaxınlaşmaq`,
            `yaxınlaşmaq`,
            `yanaşma`,
            `gedib yaxınlaşmaq`,
            `sürüb yaxınlaşmaq `,
            `işarə, nişan; imzalamaq`,
            ` yayındırmaq ;karıxdırmaq`,
            ` əsas; zəruri`,
            ` buna görə də; odur ki; nəticədə`,
            `temperament; təbiət (kiminsə )`,
            ` uçmaq, yüksəkdə süzmək; artmaq (qiymet)`,
            `yetkinlik ; kamillik`,
            ` nifaq; ixtilaf;inciklik`,
            `uyğun, münasib`,
            `uyğun olmayan; əlverişsiz`,
            `bəyanat; fikir`,
            `təsvir ; xarakteristika`,
            ` ağıllı ; uzaqgörən; düşüncəli`,
            `yaşlı , yetkin`,
            `qayda;davranış;duruş; tərz; bədii islam`,
            `faiz; qiymət`,
            ` mənfəət; qazanmaq `,
            ` yığmaq; yığışmaq `,
            `ldatmaq; kələk gəlmək`,
            ` aldatmaq ; saxtakarlıq; saxtakar`,
            ` israf etmək; israf`,
            ` qəbul etmək`,
            ` qəbul `,
            ` məşğul; hesablaşmaq; bəhs etmək `,
            ` qalanı saxlamaq `,
            ` pul qabı; balaca qadın çantası `,
            ` pul qabı`,
            ` mənimsəmək ; qəbul etmek; övladlığa götürmək`,
            ` etiraf etmək; qəbul etmək; razılaşmaq
            `,
            ` inandırmaq `,
            ` ağıllı`,
            ` xərcləmək`,
            ` asılı olmaq
            `,
            `zərər, ziyan; zərər vermək`,
            ` elektrik xətləri `,
            ` baxmayaraq ki`,
            ` əvəzinə`,
            ` ləzzətli ; məftun edici `,
            ` iddia etmək; tələb, iddia`,
            `yumşaltmaq`,
            ` üzrlü `,
            `bağışlanmaz`,
            `səhv ; xəta`,
            `gicəlləndirici; başgicəlləndirici `,
            `istəmək ; can atmaq`,
            ` mümkün etmək; gətirmək; imkanı çatmaq`,
            `agah olmaq; şüurunda olmaq `,
            ` əhatə etmək`,
            `minik , vasitə`,
            ` səhv ,xəta`,
            ` qüsurlu , nöqsanlı`,
            ` təmir etmək`,
            ` bərpa, yaxşılaşmaq; sağalmaq`,
            ` ölçmək`,
            ` uğursuzluğa düçar olmaq`,
            ` uğursuzluq `,
            ` mümkün; mümkün olan`,
            ` nəticə ;mülahizə`,
            ` təsvir etmək`,
            ` yerli`,
            ` doldurmaq`,
            `blank doldurmaq`,
            ` namizəd `,
            ` buraxmaq; çıxarmaq; qovmaq`,
            ` rədd etmək; imtina etmək`,
            ` etiraz etmək `,
            `etiraz etmək`,
            ` tələb etmək `,
            ` tələb etmək `,
            ` üstün tutmaq`,
            `boş vaxt; asudə vaxt`,
            ` səlis; axıcı; sərbəst`,
            ` zənginləşdirmək`,
            `yüksəltmək;artırmaq (keyfiyyəti)`,
            ` əhatə etmək; daxil etmək`,
            ` idarə etmək; öhdəsindən gəlmək`,
            ` itələmək; asta qaçış `,
            `azaltmaq ; yüngülləşdirmək`,
            ` öhdəsindən gəlmək `,
            ` münasibət; nəzər`,
            ` qaçmaq; yayınmaq; qarşısını almaq `,
            ` ləngitmək; gecikdirmək; təxirə salmaq `,
            ` tənəzzül; çürümək`,
            ` tekid etmək`,
            ` qarşısını almaq `,
            `azaltmaq`,
            `azaltmaq; kiçiltmək`,
            ` azalmaq; azaltmaq`,
            `ünsiyyət`,
            ` müdaxilə etmək; sözünü kəsmək`,
            ` ifadə etmək`,
            ` fikir;rəy `,
            ` problem; məsələ; nəşr etmək;`,
            `özəl; şəxsi`,
            ` uyğun olmayan; əlaqəsiz`,
            `bir başa`,
            ` müzakirə etmək`,
            ` həssas ; kövrək`,
            ` nifaq ; ixtilaf`,
            ` mübahisə ; münaqişə`,
            ` yüngül ; yüngülcə`,
            ` təsir etmək`,
            ` istirahət (etmək ); zəiflətmək`,
            `qurban; qurban vermək `,
            ` aldatmaq, satmaq,xainlik etmək`,
            ` parlaq; zirək; zəkalı`,
            `vəfasız ; kafir; əqidəsiz`,
            `qəzəbli ; hiddətli`,
            `deqiq; eynile, tamamilə `,
            ` inadkar; ters`,
            ` hərdəmxəyal; əhvalı dəyişkən`,
            `boşanmaq`,
            ` möhtac; ehtiyacı olan; kasıb `,
            `qalib; zəfər`,
            `ünsiyyətcil`,
            ` səliqəli; təmizkar; səliqəyə salmaq`,
            `əliqəli; təmizkar`,
            ` cahil, elmsiz`,
            ` cahillik`,
            ` savadsız`,
            `cahillik; savadsızlıq`,
            `daxili`,
            `təcrübəli`,
            `bacarıqsız`,
            `itaət etmək`,
            `oğru`,
            ` valeh edici`,
            ` çağırış ; yarışa çağırmaq; problem`,
            ` rüşvət; rüşvət vermək`,
            ` rüşvətxorluq; satqınlıq `,
            ` adət`,
            `gömrük`,
            `iştirak etmək`,
            ` iştirak etmək `,
            `xəbərdar olma`,
            ` qanun vericilik`,
            ` məsləhətli ; uyğun`,
            ` rəftar ; münasibət`,
            `sağaltmaq; müalicə etmək; çarə`,
            ` böyütmək; tərbiyə etmək`,
            ` laqeyd`,
            ` həvəsdən salmaq `,
            ` cəsarətləndirmək, həvəsləndirmək`,
            ` tamamilə ; büsbütün`,
            ` səlis ; axıcı`,
            ` şən; gümrah`,
            ` şən ; sevincli`,
            `tərifləmək`,
            ` ruhlandırmaq; ilham vermək`,
            ` unikal; təkraredilməz`,
            ` səhnə; mərhələ`,
            `sakin`,
            `tamamilə ; bütövlükdə`,
            `genişləndirmək; uzanmaq`,
            `sənayeləşdirmək`,
            ` sağ qalmaq; yaşamaq`,
            ` uğur qazanmaq`,
            `kimlik`,
            `qoruyub saxlamaq; mühafizə etmək`,
            ` saxlamaq; təsdiqləmək; ailə saxlamaq`,
            ` yetişdirmək; becərmək`,
            `taxıl`,
            ` kənd; kəndli`,
            `qalmaq`,
            `qalan`,
            `şərt; bron`,
            ` qorumaq ; hifz etmək`,
            ` böyümək; yetişdirmək`,
            ` icma; birlik; ortaqlıq`,
            ` can sıxıcı; maraqsız`,
            ` təsdiqləmək`,
            ` saxlamaq; tutmaq; dəvət etmək`,
            `irs`,
            ` qıcıqlandırmaq; zəhlə tökmək;bezdirmək`,
            ` qane etmək; razı salmaq `,
            ` maraq; maraqlandırmaq; narahat olmaq`,
            `narahat`,
            ` narahatlıq; narahat etmək; narahat olmaq`,
            ` diqqətsizlik ; laqeydlik`,
            ` üzr istəmək`,
            `qorxutmaq; vahiməyə salmaq`,
            ` tələb etmək`,
            ` uzaqlaşmaq; geri çəkmək (hərbi )`,
            ` tələb; tələb etmək`,
            ` təklif etmək`,
            ` məqsəd ; qayə`,
            `qəsdən`,
            ` narahat etmək`,
            `yoxlamaq`,
            ` ölmək; məhv olmaq
            `,
            `səbəb; səbəb olmaq`,
            `yəqin ki; ehtimal ki`,
            `təyin ; istinad etmək`,
            `qidasızlıq; pis qidalanma`,
            ` almaq; əldə etmək`,
            ` müvafiq; tam uyğun; tələblərəcavab verən`,
            `yumşaltmaq ; yumşaq yer düzəltmək `,
            ` idarə etmək; ötüşmək; öhdəsindən gəlmək`,
            ` mərhələ; səfhə`,
            `qəsəbə ; yaşayış məntəqəsi; razılıq `,
            ` həll etmək; məskunlaşmaq nizamlamaq`,
            `məsuliyyət`,
            `məsuliyyətli`,
            `məsuliyyətsiz`,
            `nəzakətli`,
            `nəzakətsiz`,
            `alicənab`,
            `alicənablıq`,
            `səbr`,
            `səbrli`,
            `səbrsiz`,
            `qebul etmək`,
            `tənqid etmək`,
            `danlamaq; tənbeh etmək`,
            `danlamaq; məzəmmət etmək`,
            ` güman etmək; ehtimal etmək`,
            `təklif; təklif etmək`,
            `təklif; təklif etmək`,
            ` təklif`,
            ` təklif etmək`,
            ` varlıq ; mövcudiyyət`,
            ` təkmilləşdirmək; yaxşılaşdırmaq
            `,
            ` təvazökar sadə; həyalı `,
            `lovğa`,
            ` küsmək ; mübahisə etmək; dalaşmaq `,
            ` əhatə etmək`,
            ` cəhd`,
            `cəhd etmək`,
            ` zərər; ziyan`,
            ` incitmək; yaralamaq
            `,
            `diqqət`,
            `çirkləndirmək`,
            `çatmaq`,
            ` ümumi; ortaq`,
            ` məqsəd ; nişan almaq`,
            `hədəf`,
            ` nail olmaq`,
            `əminlik; özünə inam`,
            ` inandırmaq ; yola gətirmək`,
            ` müəyyənləşdirmək; təyin etmək`,
            `görmə; nəzər`,
            ` həll ; izahat; məhlul
            `,
            `xüsusi ; məxsus`,
            `hazırlamaq`,
            `təşkil etmək`,
            ` inamsız ; tərəddüdlü`,
            ` müəyyən ; əmin`,
            ` inamsız ; qeyri -müəyyən`,
            ` əzm; qətiyyət; tərif `,
            ` kömək; kömək etmək`,
            ` təsvir etmək `,
            `qaçmaq ; qarşısını almaq; çəkinmək`,
            ` təqib; izləmə`,
            ` təqib etmək; izləmək `,
            ` eqoist `,
            `sürüşkən`,
            `gizlətmək`,
            `gizlətmək`,
            `cinayət`,
            `təhlükəsiz`,
            `təhlükəli`,
            `əyləndirmək`,
            ` təqdim etmək; təmsil etmək `,
            ` müsabiqə; rəqabət aparmaq `,
            ` elan etmək`,
            `tıqqıltı`,
            ` dəqiq ; səliqəli `,
            `yan təsirlər`,
            `təcili ; çarəsiz hal`,
            `artıq; üstün olmaq
            `,
            `mərhəmət`,
            `istismar`,
            `ədalət`,
            `ədalətsizlik`,
            `aqressiya ; basqın; təcavüz; istila`,
            ` rəftar ; davranış; müalicə
            `,
            ` firavanlıq ; tərəqqi; uğur`,
            `zorakılıq`,
            `gəlir ; qazanc; gəlir əldə etmək`,
            ` uzaqlaşmaq ; istefaya çıxmaq; təqaüdə cixmaq`,
            ` təqdim etmək; tanış etmək; tanıtmaq`,
            ` tez- tez`,
            `fürsət ; imkan; şans`,
            ` vərdiş`,
            ` öyrəşdimək ; alışdırmaq `,
            `öyrəşmək `,
            ` salxım; dəstə; komalaşmaq
            `,
            ` dəbdəbəli ; möhtəşəm`,
            ` sifariş; əmr`,
            ` əmr; fərman`,
            ` keçən; ötən; davam etmək; sonuncu`,
            ` davam etmək`,
            `davam etmək`,
            ` fırıldaqçı; kələk; hiyləgər; aldatmaq`,
            `aldatmaq`,
            `lovğalanmaq ; öyünmək`,
            ` tələsik`,
            `genişləndirmək`,
            ` nəzakətlə; yumşaq; yüngülcə`,
            ` incitmək ; pozmaq; təhqir etmək`,
            ` sərfəli ; qazanclı`,
            `ixtisas`,
            `yarışan; rəqabət aparan`,
            ` ruh; can; mənəviyyat`,
            `qədim`,
            `əsas`,
            `dini`,
            `rəqabət ; rəqiblik`,
            ` bölmək ; ayırmaq`,
            ` mədəniyyətlər arası `,
            `qırış`,
            `imkan vermək`,
            `effektiv`,
    ]
    let ozu = document.querySelector( ".ozu").value
    let second = document.querySelector(".second").value
   
    b[0]=second
    a[0]=ozu
   
    let randomu = Math.floor(Math.random()*((a[0]*1)-(b[0]*1))+(b[0])*1)
    document.querySelector(".English").innerHTML = word[randomu]
    document.querySelector(".Aze").innerHTML = aze[randomu]
    document.querySelector(".Aze").style.opacity = "0"
    console.log(aze.length,word.length)
    

  }


    function goster(){
        document.querySelector(".Aze").style.opacity = "1"
    }


  randomIntFromInterval()








  


 