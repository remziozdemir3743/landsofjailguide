/* ==========================================================================
   LANDS OF JAIL — EVENTS COMMAND
   Content data + render logic
   Source: #EventsGuide Discord export
   Produced by WaysToDie#217
   ========================================================================== */

const CATS = {
  war:     { label: "Savaş & Kuşatma",     badge: "b-war",     icon: "⚔️", full: "War & Siege Events" },
  farm:    { label: "Farm & PvE",          badge: "b-farm",    icon: "🎯", full: "Farming & PvE Events" },
  systems: { label: "Sistemler & Gelişim", badge: "b-systems", icon: "🛠️", full: "Systems & Progression" },
  res:     { label: "Kodlar & Kaynaklar",  badge: "b-res",     icon: "🎁", full: "Codes & Resources" },
};

const IMG = "assets/img/";

const GUIDES = [
// ==========================================================================
// WAR & SIEGE
// ==========================================================================
{
  id: "svs-war", cat: "war", icon: "👑", title: "SvS War",
  tagline: "Server vs Server hazırlık, rally taktikleri ve asker kaybını minimuma indirme rehberi.",
  tags: ["Rally", "Turret", "Supreme Prison", "Anti-Scout"],
  body: `
    <h2>Puan Toplama Stratejisi</h2>
    <p>Mümkün olduğunca çok puan toplamak için aşağıdaki sırayı takip edin:</p>
    <ol>
      <li>Başlangıçta sadece <b>turret</b> veya <b>supreme prison</b>'a saldıran rallylere katılın ya da rally başlatın.</li>
      <li>Zaten alınmış bir turret veya supreme prison'ı <b>savunmak için</b> rally'e katılmayın.</li>
      <li>Zaten alınmış bir turret veya supreme prison'a <b>solo</b> asker gönderin.</li>
      <li>Asker sayınızı sürekli takip edin — geri çekip tekrar gönderin.</li>
    </ol>

    <h2>Hazırlık Fazını Kaybettiysek</h2>
    <p>Asker kaybını en aza indirmek için:</p>
    <ol>
      <li>6 kuyruk (queue) bulundurmak en idealidir.</li>
      <li>Supreme prison'a ışınlanın (teleport) ve bir daha hareket etmeyin.</li>
      <li>Ana ordunuzu savaşmak için tutun.</li>
      <li>4 tam orduyu ittifak binalarına saklamak için gönderin.</li>
      <li>1 orduyu yakındaki bir müttefike takviye olarak gönderin (bu ordu, ana ordudaki askerler hastanedeyken veya kaybedildiğinde takviye için kullanılır).</li>
    </ol>

    <h2>Hazırlık Fazını Kazandıysak</h2>
    <p>Askerlerimizi saklayacak bina olmadığı için asker kaybedeceğiz. Birisi bize saldırırsa şuna odaklanmalıyız:</p>
    <ol>
      <li>Askerleri sürekli olarak yakındaki prisonlara gönderip saklayın veya geri çekin.</li>
      <li>Sürekli ışınlanmaya (teleport) devam edin.</li>
      <li>Turret'e rally başlatın veya mevcut rally'e katılın.</li>
    </ol>
    <div class="callout">
      <b>3. maddeyle ilgili:</b> Birisi size saldırsa bile, eğer rally başlatırsanız o rally'deki ordu öldürülmez.
    </div>
    <div class="callout danger">
      <b>İpucu:</b> Düşmanlar birbirleri arasında rapor paylaşabilir; bu yüzden sizden güçlü oyuncular size saldırabilir. Düşmanları şaşırtmak için <b>anti-scout</b> kullanın.
    </div>
  `
},
{
  id: "supreme-svs-honor", cat: "war", icon: "‼️", title: "Supreme SvS Honor",
  tagline: "Supreme onur puanı toplama mekaniği — görsel referans rehberi.",
  tags: ["Honor Points", "Supreme Prison"],
  body: `
    <div class="stub"><b>Not:</b> Bu kanal için yazılı bir açıklama paylaşılmamış; rehber tamamen ekran görüntüsü üzerinden anlatılmış. Aşağıdaki görsel, etkinlik panelinden alınan orijinal referanstır.</div>
    <figure class="evidence">
      <img src="${IMG}supreme-svs-honor.jpg" alt="Supreme SvS Honor event panel" loading="lazy">
      <figcaption>KAYNAK — #EventsGuide ‼️-supreme-svs-honor-‼️</figcaption>
    </figure>
    <p>Genel prensip diğer SvS etkinlikleriyle aynıdır: turret ve supreme prison kontrolü, rally koordinasyonu ve asker yönetimi burada da puanı belirler. Detaylı yazılı strateji eklendiğinde bu sayfa güncellenecektir.</p>
  `
},
{
  id: "crystal-clash", cat: "war", icon: "🔷", title: "Crystal Clash",
  tagline: "3 rol sistemi (Commander / Warrior / Engineer), harita zamanlaması ve ittifak koordinasyonu.",
  tags: ["Commander", "Warrior", "Engineer", "Crystal Mine"],
  body: `
    <h2>Savaş Öncesi Seçilebilir Roller</h2>
    <p>Savaş alanına girmeden önce, her biri kendine özgü yeteneklere sahip 3 rolden birini seçmelisiniz:</p>
    <div class="role-grid">
      <div class="role-card">
        <span class="lbl">Ön Cephe</span>
        <h4>Commander</h4>
        <p>Doğrudan saldırı buff'ı alan agresif bir ön cephe oyuncusu; düşman üslerine solo saldırılar veya rally'ler yönetir.</p>
      </div>
      <div class="role-card">
        <span class="lbl">Destek</span>
        <h4>Warrior</h4>
        <p>Yürüyüş hızı buff'ı olan destekleyici bir rol; ittifak saldırılarına çok daha hızlı katılmayı sağlar.</p>
      </div>
      <div class="role-card">
        <span class="lbl">Lojistik</span>
        <h4>Engineer</h4>
        <p>Binalar saldırıya uğradığında etrafa saçılan kristalleri toplayan kritik bir lojistik rol; harita puanını yükseltir.</p>
      </div>
    </div>

    <h2>Ödüller ve Hedefler</h2>
    <ul>
      <li>Haritadaki kilit stratejik yapıları ele geçirerek <b>Crystal Points</b> biriktirin.</li>
      <li>Etkinlik sonunda büyük kaynak ödülleri kazanın ve savaş kademelerinde yükselin.</li>
      <li>Başarılı ittifaklar için "<b>Honor Exhibit Frontline Falcon</b>" gibi kalıcı ve özel ödüllerin kilidini açın.</li>
    </ul>

    <h2>1. Savaş Öncesi Hazırlık (Maçtan 24 Saat Önce)</h2>
    <ul>
      <li><b>Zaman Dilimi Seçimi:</b> İttifak lideri, üyelerin en aktif olabileceği zaman aralığını seçmelidir. Maçın kaderi online oyuncu sayısına göre belirlenir.</li>
      <li><b>En Güçlü 30 Oyuncu:</b> Eşleştirme sistemi, katılan ilk 30 üyenin toplam gücüne göre çalışır. Bu yüzden pasif oyuncular listeden çıkarılmalı, en aktif ve güçlü oyuncular savaşa dahil edilmelidir.</li>
      <li><b>Asker ve Kahraman Hazırlığı:</b> Tüm askeri hastaneler boşaltılmalı, ordu kapasitesi maksimize edilmelidir. Tyron + Phoenix + Inata gibi güncel meta ordu kompozisyonları önceden kurulmalıdır.</li>
      <li><b>Geçersiz Buff'lar:</b> Town Hall becerileri, Mayor yetenekleri ve İttifak Bölgesi bonusları savaş alanında geçerli değildir. Hazırlığınızı tamamen ham askeri güce ve kahraman ekipmanına dayandırın.</li>
    </ul>

    <h2>2. Taktiksel Rol Dağılımı ve Görevler</h2>
    <p>İttifak içinde dengeli bir rol dağılımı (örn. %40 Commander, %30 Warrior, %30 Engineer) esastır.</p>
    <h3>Commander Stratejisi</h3>
    <p><b>Görev:</b> Haritadaki ana kilit binalara (Crystal Mine, Church, War Fortress) rally başlatmak.<br>
    <b>Taktik:</b> En yüksek ordu gücüne sahip "whale" oyuncular bu rolü seçmelidir. Solo saldırmak yerine, güçlü düşman savunma hatlarını yarmak için sürekli ittifak rally'leri başlatmalıdırlar.</p>
    <h3>Warrior Stratejisi</h3>
    <p><b>Görev:</b> Commander'ların başlattığı rally'leri hızla doldurmak ve ele geçirilen binaları savunmak.<br>
    <b>Taktik:</b> Yürüyüş hızı buff'ı sayesinde haritanın bir ucundan diğerine hızlıca destek gönderebilirler. Bina savunurken ordu kompozisyonunda Tank birimlere (savunma birimleri) öncelik vermelidirler.</p>
    <h3>Engineer Stratejisi</h3>
    <p><b>Görev:</b> Haritada rastgele beliren kristalleri toplamak ve lojistik destek sağlamak.<br>
    <b>Taktik:</b> Görece düşük savaş gücüne sahip oyuncular için idealdir. Doğrudan çatışmaya girmek yerine sürekli haritayı taramalı, boşta kalan enerji kaynaklarını toplamalı ve ittifak için gizli puanlar kazanmalıdır.</p>

    <h2>3. Detaylı Harita ve Zamanlama Stratejileri</h2>
    <p>Savaş alanında puan kazanmanın anahtarı, stratejik binaları işgal etmek ve harita sayacını takip etmektir.</p>
    <ul>
      <li><b>İlk 5 Dakika (İlk Dalga Saldırısı):</b> Maç başlar başlamaz haritadaki tüm stratejik binalar nötrdür (sarı). İttifakın en hızlı oyuncuları (Warrior'lar) ilk kontrolü (mavi) ele geçirmek için en yakın binalara (Tower, Altar vb.) hızlıca asker göndermelidir. İlk dakikalarda ne kadar çok bina güvence altına alınırsa, pasif puan akışı o kadar erken başlar.</li>
      <li><b>Crystal Mine Zamanlaması (12, 28 ve 44. Dakikalar):</b> Rastgele madenler maçın 12., 28. ve 44. dakikalarında haritada belirir. Bu zamanlardan bir dakika önce Engineer ve Warrior'lar haritanın farklı bölgelerine dağılmalı ve madenler ortaya çıkar çıkmaz toplamaya başlamalıdır. Bu madenler hem kişisel hem de ittifak puanlarını ciddi şekilde artırır.</li>
      <li><b>Düşman Ordularını Eritmek:</b> Sadece binaları elde tutmak yeterli değildir; haritada açıkta yakalanan düşman ordularını yok etmek doğrudan Kişisel Puan kazandırır. Ancak ordunuzun tamamen silineceğini hissettiğiniz an geri çekilmeli, hastane maliyetinden kaçınmalı ve kaynaklarınızı korumalısınız.</li>
    </ul>

    <div class="evidence">
      <img src="${IMG}crystal-clash-map.jpg" alt="Crystal Clash battlefield map" loading="lazy">
      <figcaption>KAYNAK — Crystal Clash Full EN harita özeti</figcaption>
    </div>
  `
},
{
  id: "flames-of-conflict", cat: "war", icon: "🔥", title: "Flames of Conflict (KE)",
  tagline: "Kill Event — nötr bölgelerde asker avlama ve kalıcı kayıp risk yönetimi.",
  tags: ["Kill Event", "Neutral Zone", "NAP"],
  body: `
    <p><b>Flames of Conflict</b>, genellikle <b>KE (Kill Event)</b> olarak anılır; <b>Lands of Jail</b>'de oyuncuların rakip prisonlarına saldırıp askerlerini yenerek puan kazandığı <b>iki günlük bir savaş etkinliğidir</b>. Genellikle <b>Server versus Server (SvS)</b> ve <b>Clash for Supremacy</b> etkinlikleriyle birlikte yürütülür.</p>

    <div class="callout danger">
      <b>Önemli Uyarı:</b> Bu etkinlik sırasındaki asker kayıpları <b>kalıcıdır</b> — birimleri yeniden eğitmek için Recruitment Hall'da ciddi zaman ve kaynak gerekir. Katılımcılar riski dikkatle tartmalıdır.
    </div>

    <h2>Etkinliğin Önemli Noktaları</h2>
    <h3>Nötr Bölgeler</h3>
    <p>Savaşlar, aşağıdaki gibi belirlenmiş nötr alanlarda gerçekleşmelidir:</p>
    <ul>
      <li>Ironholds</li>
      <li>Supreme Prison</li>
    </ul>
    <p>Bu bölgeler, sunucuya özel <b>Non-Aggression Pact (NAP)</b> kurallarını ihlal etmeden kill toplamanıza olanak tanır.</p>

    <h2>Ödüller & Kilometre Taşları</h2>
    <p>Puan kazanmak, <b>değerli kilometre taşı ödüllerinin</b> kilidini açar. Askerleriniz <b>yetersiz seviyedeyse</b> veya onları iyileştirecek <b>kaynağınız yoksa</b>, prisonunuzu korumak için <b>shield kullanmanız</b> şiddetle tavsiye edilir.</p>
  `
},
{
  id: "turmoil-surge", cat: "war", icon: "🕵️", title: "Turmoil Surge",
  tagline: "20 dalgalık raider saldırısında puanı maksimize etme ve prison savunma ayarları.",
  tags: ["Raiders", "Wave of Chaos", "Defense"],
  body: `
    <p>Bu etkinlikte raiderlar, shield'ı olanlar dahil <b>tüm ittifak üyelerine 20 dalga</b> halinde saldırır. Peki ne yapmalı, nasıl daha fazla puan kazanılır? İşte en önemli kısım:</p>
    <ol>
      <li>Başka oyuncuların prisonunu savunursanız <b>daha fazla puan</b> kazanırsınız.</li>
      <li>Başka oyuncular sizin prisonunuzu savunursa <b>daha fazla puan</b> kazanırsınız.</li>
    </ol>
    <p>Bir diğer önemli nokta: daha fazla puan kazanmak için <b>kendi askerleriniz kendi prisonunuzu savunmamalıdır</b>.</p>

    <div class="callout">
      Askerlerinizin kendi prisonunuzu savunmasını engellemek için ilgili ayardaki kutucuğu işaretleyin — bu şekilde askerleriniz prisonunuzu savunmaz.
    </div>

    <p>Ne kadar çok oyuncu online olursa puanınız o kadar yüksek olur; çünkü Marauder'lar sadece <b>7., 14. ve 17. dalgalarda</b> online oyunculara saldırır.</p>

    <div class="callout danger">
      <b>10. ve 20. dalgalarda</b> 20 raider, 2 kuleye saldırır — en iyi askerlerinizi ve kahramanlarınızı bu kuleleri savunmaya gönderin.
    </div>

    <p>"Truly the End (Wave of Chaos)" etkinliği için, kuleleri veya diğer prisonları savunurken ordunuzun ilk kahramanları olarak şu kahramanları gönderin:</p>

    <div class="role-grid">
      <div class="role-card">
        <span class="lbl">Öncelik</span>
        <h4>İlk Ordu Kahramanları</h4>
        <p>Phoenix, Tyronn, Xuanming, Veronica, Devilian, Vivian, Ekko, Flameborne, Samir, Lunarl, Lofili</p>
      </div>
      <div class="role-card">
        <span class="lbl">Bomber</span>
        <h4>Bomber Kahramanları</h4>
        <p>Lunarl, Samir, Ekko, Flameborne, Whisper, Alph, Vivian</p>
      </div>
      <div class="role-card">
        <span class="lbl">Shooter</span>
        <h4>Shooter Kahramanları</h4>
        <p>Mireya, Lofili, Sawyer, Veronica, Inata, Devilian</p>
      </div>
      <div class="role-card">
        <span class="lbl">Shield</span>
        <h4>Shield Kahramanları</h4>
        <p>Panda, Tyronn, Phoenix</p>
      </div>
    </div>
    <p>Bunları kullanmak puanınızı artıracaktır.</p>

    <div class="evidence">
      <img src="${IMG}turmoil-surge-screenshot.jpg" alt="Turmoil Surge in-game screenshot" loading="lazy">
      <figcaption>KAYNAK — oyun içi Turmoil Surge ekran görüntüsü</figcaption>
    </div>
  `
},
{
  id: "sandsea-conquest", cat: "war", icon: "🏖️", title: "Sandsea Conquest",
  tagline: "6 filo formasyonu, gemi istasyonu savunması ve Drilling Platform kontrolü ile aylık zafer stratejisi.",
  tags: ["Squadron", "Ship Station", "Tactician", "Drilling Platform"],
  body: `
    <div class="callout danger">
      <b>Önemli:</b> Bu etkinlik saf güçle ilgili <b>değildir</b> — koordinasyon, disiplin ve akıllı konumlandırmayla kazanılır!
    </div>

    <h2>Etkinliğe Genel Bakış</h2>
    <p>Sandsea Conquest, Lands of Jail'deki <b>en önemli aylık etkinliklerden biridir</b>. Amacınız düşman istilasını durdurmak ve stratejik noktaların kontrolünü ele geçirmektir.</p>

    <h2>1. 6 Filo Formasyon Stratejisi</h2>
    <ul>
      <li>6 filo (squadron) formasyon stratejisi kullanın.</li>
      <li>Filolarınızı doğru şekilde dağıtın.</li>
      <li>Her filonun rolünü ve görevini önceden tanımlayın.</li>
    </ul>

    <h2>2. Ship Station Savunması</h2>
    <ul>
      <li>Ship Station'larınızı düzgün şekilde savunun.</li>
      <li>Savunma konfigürasyonunuzu optimize edin.</li>
      <li>İstasyonların düşman tarafından ele geçirilmesini önleyin.</li>
    </ul>

    <h2>3. 3-March Yönetim Sistemi</h2>
    <ul>
      <li>3-march yönetim sistemini kullanın.</li>
      <li>Marşlarınızı verimli şekilde koordine edin.</li>
      <li>Kaynaklarınızı ve askerlerinizi akıllıca dağıtın.</li>
    </ul>

    <h2>4. Tactician Hayatta Kalma İpuçları</h2>
    <div class="callout danger">
      <b>ÇOK ÖNEMLİ!</b> Tactician rolünü üstlenen oyuncu <b>hayatta kalmalıdır</b> — bu kritik önemdedir.
    </div>
    <ul>
      <li>Tactician'ı korumak için özel stratejiler geliştirin.</li>
      <li>Tactician'ın düşman tarafından hedef alınmasını önleyin.</li>
    </ul>

    <h2>5. Düşman Erişimini Kesme</h2>
    <ul>
      <li>Bölgeniz saldırı altındayken düşmanın erişimini kesin.</li>
      <li>Stratejik noktalarda barikatlar oluşturun.</li>
      <li>Düşmanın ilerlemesini durdurmak için yolları kapatın.</li>
    </ul>

    <h2>6. Drilling Platform Kontrolü</h2>
    <div class="callout">
      <b>Kazananı Belirleyen Faktör!</b> Drilling Platform'un kontrolü etkinliğin kazananını belirler.
    </div>
    <ul>
      <li>Bu platformu <b>en öncelikli hedefiniz</b> yapın.</li>
      <li>Düşmandan korumak veya ele geçirmek için tüm gücünüzü buraya yönlendirin.</li>
    </ul>

    <h2>Strateji Özeti</h2>
    <table class="datatable">
      <thead><tr><th>Konu</th><th>Strateji</th></tr></thead>
      <tbody>
        <tr><td>Formasyon</td><td>6 filo kurulumunu kullan</td></tr>
        <tr><td>Savunma</td><td>Ship Station'ları doğru şekilde savun</td></tr>
        <tr><td>Yönetim</td><td>3-march sistemini uygula</td></tr>
        <tr><td>Tactician</td><td>Hayatta kalmasını sağla (çok önemli!)</td></tr>
        <tr><td>Müdahale</td><td>Düşman erişimini kes</td></tr>
        <tr><td>Zafer Anahtarı</td><td>Drilling Platform kontrolü</td></tr>
      </tbody>
    </table>

    <div class="evidence-row">
      <figure class="evidence"><img src="${IMG}sandsea-map.jpg" alt="Sandsea Conquest map" loading="lazy"><figcaption>Sandsea Conquest — harita</figcaption></figure>
    </div>
  `
},

// ==========================================================================
// FARM & PVE
// ==========================================================================
{
  id: "gold-hunter", cat: "farm", icon: "🪙", title: "Gold Hunter",
  tagline: "Jungle Gear, teleport-scan rotasyonu ve Plundering skill ile 13M+ puana ulaşma rehberi.",
  tags: ["Jungle Gear", "Plundering", "Underground Trove"],
  body: `
    <h2>1. Ekipman Kurulumu</h2>
    <p><b>Jungle Gear</b> kullanın — bu etkinlik için en iyi ekipmandır. Yüksek asker gücünüz olmasa bile, doğru ekipman kurulumuyla yine de yüksek puan alabilirsiniz.</p>

    <h2>2. Greedy Miners ve Gold Mines'ı Verimli Farmlama</h2>
    <p>Madenleri etkili şekilde farmlayın, kaynak toplama stratejinizi optimize edin ve altın toplamayı maksimize etmek için verimli farm rotalarına odaklanın.</p>

    <h2>3. Teleport ve Scanning Kullanımı</h2>
    <ul>
      <li>Daha iyi maden bölgelerine geçmek için <b>Teleport</b> kullanın.</li>
      <li>Etrafınızdaki en verimli maden noktalarını keşfetmek için <b>Scanning</b> kullanın.</li>
      <li>Daha fazla altın toplamak için daha iyi konumlara taşının.</li>
    </ul>

    <h2>4. Gold Treasure'ı Doğru Zamanda Almak</h2>
    <ul>
      <li>Altın hazineyi almak için <b>doğru anı</b> seçin.</li>
      <li><b>Snipe edilmemeye</b> dikkat edin — diğer oyuncular sizi izliyor olabilir.</li>
      <li>Hazineleri toplamak için güvenli pencereleri bekleyin.</li>
    </ul>

    <h2>5. Plundering Skill'ini Yükseltme</h2>
    <p><b>Plundering skill'ini</b> yükseltin — bu etkinlik için olmazsa olmaz bir yetenektir. Düşmanlardan daha fazla kaynak çalmanızı sağlar; maksimum verimlilik için bu skill'e öncelik verin.</p>

    <h2>6. Underground Trove'u Yönetmek</h2>
    <ul>
      <li>Underground Trove'a akıllıca girin.</li>
      <li><b>Riskli çatışmalardan kaçının</b> — gereksiz savaşlara girmeyin.</li>
      <li>Savaşlarınızı dikkatle seçerek kaynaklarınızı koruyun.</li>
      <li>Akıllı oynayın — her savaş girmeye değmez.</li>
    </ul>

    <h2>7. Puan ve Sıralama Hedefi</h2>
    <p>Bu stratejilerle <b>13M+ puana</b> ulaşabilir ve <b>İlk 10</b> sıralamayı hedefleyebilirsiniz.</p>

    <h2>Genel İpuçları Özeti</h2>
    <table class="datatable">
      <thead><tr><th>Konu</th><th>İpucu</th></tr></thead>
      <tbody>
        <tr><td>Ekipman</td><td>Jungle Gear kullan</td></tr>
        <tr><td>Skill</td><td>Plundering'i yükselt</td></tr>
        <tr><td>Hareket</td><td>İyi bölgeler için Teleport + Scanning kullan</td></tr>
        <tr><td>Zamanlama</td><td>Hazine alırken dikkatli ol, snipe edilme</td></tr>
        <tr><td>Savaş</td><td>Riskli çatışmalardan kaçın</td></tr>
        <tr><td>Hedef</td><td>10M+ puan, İlk 10 sıralama</td></tr>
      </tbody>
    </table>
  `
},
{
  id: "gorilla", cat: "farm", icon: "🦍", title: "Gorilla",
  tagline: "Gorilla etkinliği için en iyi kahraman tier listesi ve günlük asker oranları.",
  tags: ["Tier List", "Troop Ratio", "Heroes"],
  body: `
    <h2>Gorilla İçin En İyi Kahramanlar</h2>
    <div class="tier-block">
      <div class="tier-row tier-S"><div class="tier-flag">S</div><div class="tier-content">
        <b>Shield:</b> Tyronn S1, Phoenix S1, Xuanming S3 &nbsp;·&nbsp;
        <b>Bomber:</b> Alph S2, Ryuici Ito S4, Flameborne, Lunarl &nbsp;·&nbsp;
        <b>Shooter:</b> Mireya S2, Ada S5, Edwin S5, Lofili
      </div></div>
      <div class="tier-row tier-A"><div class="tier-flag">A</div><div class="tier-content">
        <b>Bomber:</b> Vivian S1, Whisper S3, Koschevoi S4 &nbsp;·&nbsp; <b>Shooter:</b> Sawyer S4
      </div></div>
      <div class="tier-row tier-B"><div class="tier-flag">B</div><div class="tier-content">
        <b>Shield:</b> Marcus S5 &nbsp;·&nbsp; <b>Bomber:</b> Samir &nbsp;·&nbsp;
        <b>Shooter:</b> Devillian S1, Inata S1, Veronica S2, Drake S3
      </div></div>
      <div class="tier-row tier-C"><div class="tier-flag">C</div><div class="tier-content">
        <b>Shield:</b> Zoltan S4 &nbsp;·&nbsp; <b>Bomber:</b> Ekko
      </div></div>
      <div class="tier-row tier-D"><div class="tier-flag">D</div><div class="tier-content">
        <b>En Kötü:</b> Tormund S1, Caesar S2, Gerd, Iwado, Vesaryon Gimes, Mia, Flora, Platos, Tüm Mavi Kahramanlar
      </div></div>
    </div>

    <h2>Gorilla Günlük Asker Oranları</h2>
    <div class="day-grid">
      <div class="day-cell"><div class="d">Gün 1</div><div class="bars"><span>Shield <b>0%</b></span><span>Bomber <b>20%</b></span><span>Shooter <b>80%</b></span></div></div>
      <div class="day-cell"><div class="d">Gün 2</div><div class="bars"><span>Shield <b>0%</b></span><span>Bomber <b>10%</b></span><span>Shooter <b>90%</b></span></div></div>
      <div class="day-cell"><div class="d">Gün 3</div><div class="bars"><span>Shield <b>0%</b></span><span>Bomber <b>20%</b></span><span>Shooter <b>80%</b></span></div></div>
      <div class="day-cell"><div class="d">Gün 4</div><div class="bars"><span>Shield <b>0%</b></span><span>Bomber <b>10%</b></span><span>Shooter <b>90%</b></span></div></div>
      <div class="day-cell"><div class="d">Gün 5</div><div class="bars"><span>Shield <b>0%</b></span><span>Bomber <b>15%</b></span><span>Shooter <b>85%</b></span></div></div>
      <div class="day-cell"><div class="d">Gün 6</div><div class="bars"><span>Shield <b>0%</b></span><span>Bomber <b>10%</b></span><span>Shooter <b>90%</b></span></div></div>
      <div class="day-cell"><div class="d">Gün 7</div><div class="bars"><span>Shield <b>0%</b></span><span>Bomber <b>10%</b></span><span>Shooter <b>90%</b></span></div></div>
    </div>

    <div class="evidence-row">
      <figure class="evidence"><img src="${IMG}gorilla-1.jpg" alt="Gorilla event reference 1" loading="lazy"><figcaption>Gorilla — referans görsel 1</figcaption></figure>
      <figure class="evidence"><img src="${IMG}gorilla-2.jpg" alt="Gorilla event reference 2" loading="lazy"><figcaption>Gorilla — referans görsel 2</figcaption></figure>
    </div>
  `
},
{
  id: "trial-cage", cat: "farm", icon: "⛓️", title: "Trial Cage",
  tagline: "Rally'e ilk giren kahramanlar ve Heart tarafından hazırlanmış tier list görseli.",
  tags: ["Rally", "Heroes", "Tier List"],
  body: `
    <p>Orduya girecek ilk kahramanlar: <b>Phoenix, Tyronn, Xuanming, Veronica, Devilian, Vivian, Ekko, Flameborne, Samir, Lunarl, Lofili</b></p>
    <div class="role-grid">
      <div class="role-card"><span class="lbl">Bomber</span><h4>Bomber Kahramanları</h4><p>Lunarl, Samir, Ekko, Flameborne, Whisper, Alph, Vivian</p></div>
      <div class="role-card"><span class="lbl">Shooter</span><h4>Shooter Kahramanları</h4><p>Mireya, Lofili, Sawyer, Veronica, Inata, Devilian</p></div>
      <div class="role-card"><span class="lbl">Shield</span><h4>Shield Kahramanları</h4><p>Panda, Tyronn, Phoenix</p></div>
    </div>

    <figure class="evidence">
      <img src="${IMG}trial-cage-tierlist.jpg" alt="Trial Cage hero tier list by Heart" loading="lazy">
      <figcaption>Tier List — Heroes Join Rally Cage, hazırlayan: Heart</figcaption>
    </figure>
  `
},
{
  id: "heaven-island", cat: "farm", icon: "🏝️", title: "Heaven Island",
  tagline: "Ada kontrolü etkinliği — görsel referans rehberi.",
  tags: ["Island Control"],
  body: `
    <div class="stub"><b>Not:</b> Bu kanal için yazılı bir açıklama paylaşılmamış; rehber ekran görüntüleri üzerinden anlatılmış. Detaylı yazılı strateji eklendiğinde bu sayfa güncellenecektir.</div>
    <div class="evidence-row">
      <figure class="evidence"><img src="${IMG}heaven-island-1.jpg" alt="Heaven Island reference 1" loading="lazy"><figcaption>Heaven Island — referans 1</figcaption></figure>
      <figure class="evidence"><img src="${IMG}heaven-island-2.jpg" alt="Heaven Island reference 2" loading="lazy"><figcaption>Heaven Island — referans 2</figcaption></figure>
    </div>
  `
},
{
  id: "satellite", cat: "farm", icon: "📡", title: "Satellite",
  tagline: "Uydu etkinliği kaynak toplama sistemi — görsel referans rehberi.",
  tags: ["Resource Farming"],
  body: `
    <div class="stub"><b>Not:</b> Bu kanal için yazılı bir açıklama paylaşılmamış; rehber ekran görüntüsü üzerinden anlatılmış. Detaylı yazılı strateji eklendiğinde bu sayfa güncellenecektir.</div>
    <figure class="evidence">
      <img src="${IMG}satellite.jpg" alt="Satellite event panel" loading="lazy">
      <figcaption>KAYNAK — #EventsGuide 📡-satelite-📡</figcaption>
    </figure>
  `
},

// ==========================================================================
// SYSTEMS & PROGRESSION
// ==========================================================================
{
  id: "power-armor", cat: "systems", icon: "🤖", title: "Power Armor Robots",
  tagline: "Tam zırh veritabanı, Core (Chip) sistemi, node yükseltme sırası ve savaş içi ince ayarlar.",
  tags: ["Armor DB", "Core System", "Node Upgrade", "March Speed"],
  body: `
    <p class="dh-lead" style="margin-bottom:24px;">LANDS OF JAIL — POWER ARMOR WIKI GUIDE</p>

    <h2>Bölüm 1 — Zırh Veritabanı (Tüm Zırhların Detaylı Analizi)</h2>
    <p>Zırhlar genel olarak üç asker tipine (Bomber, Shooter, Shieldbearer) bonus sağlar. Maksimum seviyeleri, sağladıkları stat bonuslarının gücünü belirler.</p>

    <div class="armor-card">
      <h4>1. Light Cone</h4>
      <div class="armor-meta"><span>Tip: Bomber</span><span>Max Lv. 60 (%39 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Multi-dimensional</dt><dd>Aktive edildiğinde, 30 dakika boyunca prisondaki tüm inşaat sürelerini %10 azaltır (Bekleme: 24 saat).</dd>
        <dt>Core Skill — Targeted Detonation</dt><dd>Savaş modunda, %50 şansla %6.5 ekstra hasar verir ve genel bomber hasarını artırır.</dd>
        <dt>Genel Değerlendirme</dt><dd>Gerçek savaş için yetersizdir. Sadece üssünüzde bina yükseltmesi başlatmadan hemen önce skill'ini aktive etmek için kullanılmalıdır.</dd>
      </dl>
    </div>
    <div class="armor-card">
      <h4>2. Hercules Alpha</h4>
      <div class="armor-meta"><span>Tip: Shooter</span><span>Max Lv. 60 (%39 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Load Burst</dt><dd>Bir kaynak noktasına gönderilen askerlerin anında toplayıp geri dönmesini sağlar (sıfır toplama süresi).</dd>
        <dt>Core Skill — Scorched Pulse</dt><dd>Shooter asker hasarını artırır.</dd>
        <dt>Genel Değerlendirme</dt><dd>Kaynak sıkıntısında ekonominizi ayakta tutmak için en kritik fonksiyonel zırh. Savaştan çok toplama için kullanılır.</dd>
      </dl>
    </div>
    <div class="armor-card">
      <h4>3. Pluto</h4>
      <div class="armor-meta"><span>Tip: Bomber</span><span>Max Lv. 90 (%65 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Emergency Shelter</dt><dd>Aktive edildiğinde, sonraki 30 dakika içindeki ilk solo saldırınızda, ölümcül asker kayıplarının %100'ü hafif yaralıya dönüştürülür.</dd>
        <dt>Core Skill — Scorching Penance</dt><dd>Bomber hasarını artırır ve düşman Shooter'larına ekstra hasar vermesini sağlar.</dd>
        <dt>Genel Değerlendirme</dt><dd>Sizden çok daha güçlü bir düşman üssüne sıfır kayıplı test/intihar saldırıları için mükemmeldir.</dd>
      </dl>
    </div>
    <div class="armor-card">
      <h4>4. Ranger</h4>
      <div class="armor-meta"><span>Tip: Shooter</span><span>Max Lv. 90 (%65 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Hazard Elimination</dt><dd>2 saat boyunca tüm askerlerin savunmasını %6 artırır (Bekleme: 16 saat).</dd>
        <dt>Core Skill — Covert Sniper</dt><dd>Shooter hasarını %60, diğer birimlerin hasarını %30 artırır.</dd>
        <dt>Genel Değerlendirme</dt><dd>Geç oyun zırhlarına geçene kadar oyundaki en tutarlı ve güçlü ana saldırı zırhı.</dd>
      </dl>
    </div>
    <div class="armor-card">
      <h4>5. Infercore</h4>
      <div class="armor-meta"><span>Tip: Bomber</span><span>Max Lv. 90 (%65 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Comprehensive Command</dt><dd>Aktive edildiğinde, 2 saat boyunca tek bir marştaki asker kapasitesini 11.250 artırır.</dd>
        <dt>Core Skill — Blazing Inferno</dt><dd>Bomber ve Shooter öldürme gücünü %60 artırır.</dd>
        <dt>Genel Değerlendirme</dt><dd>Büyük solo saldırılar veya küçük ölçekli ittifak operasyonlarında marş kapasitenizi şişirmek için son derece etkili.</dd>
      </dl>
    </div>
    <div class="armor-card">
      <h4>6. Atlax</h4>
      <div class="armor-meta"><span>Tip: Shieldbearer</span><span>Max Lv. 90 (%65 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Orbital Strike</dt><dd>2 saat boyunca sefer/rally saldırısını %6 artırır.</dd>
        <dt>Core Skill — Gravity Shift</dt><dd>Asker canını %30, Shieldbearer hasarını %40 artırır ve müttefiklerin saldırı hızına %36 buff verir.</dd>
        <dt>Genel Değerlendirme</dt><dd>Saf bir "Garrison/Savunma" tankı. İttifak binalarını elde tutup savunmak için vazgeçilmez.</dd>
      </dl>
    </div>
    <div class="armor-card">
      <h4>7. Phantom Cat</h4>
      <div class="armor-meta"><span>Tip: Shooter</span><span>Max Lv. 100 (%76 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Pinpoint Suppression</dt><dd>2 saat boyunca sefer askerlerinin canını artırır.</dd>
        <dt>Core Skill — Max Lv. 15</dt><dd>Ciddi Shooter stat artışları sağlar.</dd>
        <dt>Genel Değerlendirme</dt><dd>"Whale" (yüksek harcama yapan) oyuncuların mutlak favorisi. Ranger'ı aştıktan sonra geçilecek en güçlü ana hasar zırhı.</dd>
      </dl>
    </div>
    <div class="armor-card">
      <h4>8. Halo (No: 46)</h4>
      <div class="armor-meta"><span>Tip: Bomber</span><span>Max Lv. 100 (%76 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Overload Charge</dt><dd>Aktive edildiğinde rally kapasitesini muazzam bir şekilde 160.000 asker artırır!</dd>
        <dt>Core Skill — Artillery Barrage</dt><dd>Bomber odaklı hasar buff'ları sağlar.</dd>
        <dt>Genel Değerlendirme</dt><dd>Bomber'lar ana hasarınızı vermese bile, ittifak rally'sine eklediği inanılmaz 160k ekstra asker için maksimuma çıkarılmalıdır.</dd>
      </dl>
    </div>
    <div class="armor-card">
      <h4>9. Yokozuna</h4>
      <div class="armor-meta"><span>Tip: Shieldbearer</span><span>Max Lv. 100 (%76 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Valiant Breach</dt><dd>2 saat boyunca asker öldürme gücünü %10 artırır.</dd>
        <dt>Core Skill — Coordinated Assault</dt><dd>Bomber'lar 3 kez saldırdıktan sonra, Shieldbearer'lar %60 daha az hasar alır ve Bomber'lar %30 daha fazla hasar verir.</dd>
        <dt>Genel Değerlendirme</dt><dd>Bomber ağırlıklı formasyon kullanan oyuncular için ideal, ölçeklenen bir tank zırhı — savaş uzadıkça olağanüstü güçlenir.</dd>
      </dl>
    </div>
    <div class="armor-card">
      <h4>10. Musashimaru</h4>
      <div class="armor-meta"><span>Tip: Shooter</span><span>Max Lv. 100 (%76 Atk/Def)</span></div>
      <dl>
        <dt>Pilot Skill — Penetrating Ray</dt><dd>2 saat boyunca düşman savunmasını %10 azaltır.</dd>
        <dt>Core Skill — Strategic Support</dt><dd>Shieldbearer ve Shooter öldürme gücünü %30 artırır, alınan hasarı %45 azaltır.</dd>
        <dt>Genel Değerlendirme</dt><dd>Shooter formasyonları için tasarlanmış nihai hasar ve zırh kırma birimi; geç oyun savaşlarında Phantom Cat'in tahtına meydan okur.</dd>
      </dl>
    </div>

    <div class="evidence-row">
      <figure class="evidence"><img src="${IMG}armor-summary.jpg" alt="Power armor summary chart" loading="lazy"><figcaption>Prisoner Armor — özet tablo</figcaption></figure>
      <figure class="evidence"><img src="${IMG}armor-1.jpg" alt="Power armor reference" loading="lazy"><figcaption>Prisoner Armor — referans 1</figcaption></figure>
    </div>

    <h2>Bölüm 2 — Core (Chip) Sistemi ve Node Yükseltme Rehberi</h2>
    <p>Zırhların gerçek gücünün kilidini açan yetenekler Core'lardan (Chip) gelir. Chip'ler renk kodludur ve girdiğiniz savaş tipine göre tetiklenir:</p>
    <ul>
      <li><b>Mavi Chip'ler (Sol Ağaç):</b> Bireysel (Solo) saldırılarda aktif olur. Edinmesi en kolay ve en hızlı birikendir.</li>
      <li><b>Mor Chip'ler (Sağ Ağaç):</b> Rally (Garrison) başlatırken veya savunurken aktif olur. Tüm ittifak savaşının kalbidir.</li>
      <li><b>Turuncu/Sarı Chip'ler (Üst Ağaç — Barrier):</b> Kendi prisonunuza yapılan bir saldırıyı savunurken veya ele geçirilmiş bir kale/binanın garrison lideri olduğunuzda aktif olur.</li>
    </ul>

    <h3>En Etkili Node Yükseltme Sırası</h3>
    <p>Core'ları rastgele dağıtmak büyük bir hatadır. Birim ölüm sırasına ve hasar önceliğine dayalı bu sürekli döngüyü takip etmelisiniz:</p>
    <ol>
      <li><b>Troops Lethality:</b> Genel hasarı çarpar.</li>
      <li><b>Shooter Lethality:</b> Ana hasar kaynağınıza yoğun yatırım yapın (bomber kurulumu kullanıyorsanız Bomber Lethality).</li>
      <li><b>Troops HP (SP):</b> Genel dayanıklılığı artırır.</li>
      <li><b>Shieldbearer HP:</b> Shieldbearer'lar herhangi bir savaşta ilk ölenlerdir. Ne kadar uzun yaşarlarsa, arka sıradaki shooter'larınız o kadar çok ateş edebilir.</li>
      <li><b>Core Upgrade:</b> Yukarıdaki zinciri tamamladıktan sonra core'u yükseltin ve tüm döngüyü baştan tekrarlayın.</li>
    </ol>

    <div class="callout">
      <b>WIKI PRO-TIP (Garrison Savunması):</b> Savunma (turuncu/sarı) chip'lerini tüm zırhlarınıza eşit dağıtmayın! Tüm savunma ve mor rally chip'lerinizi tek bir ana zırha yığın. Üssünüz saldırıya uğradığında veya bir kaleyi tutuyorken, sadece o özel zırhı savunmaya (garrison lideri olarak) atayın. Dağınık chip'ler çok zayıf bir genel savunmayla sonuçlanır.
    </div>

    <h2>Bölüm 4 — Oyun İçi Taktikler ve İnce Ayarlar</h2>
    <h3>Flight Mode (Marş Hızı) Tüyosu</h3>
    <p>Zırhların, maksimum seviyeye ulaştıklarında açılan ve marş hızını %10 artıran bir roket ikonu vardır. Bir hedefe 3 ardışık marş gönderiyorsanız ve "Ana" hasar zırhınız (örn. Musashimaru) henüz maksimum seviyede değilse (dolayısıyla hız bonusundan yoksunsa), zayıf zırhlarınızdaki hız bonuslarını kapatmalısınız. Aksi takdirde zayıf marşınız hedefe önce çarpar, anında erir ve savaşı kaybetmenize neden olur. Ana hasar marşınızın hedefe her zaman ilk vuracak şekilde zamanlandığından emin olun.</p>
    <h3>Skill Toggle & Swap</h3>
    <p>Ekonomi zırhlarının (Light Cone, Hercules Alpha) pilot skill'leri kullanıldığı anda anında tetiklenir. Bu zırhları aktif savaş formasyonunuzda sürekli takılı tutmanıza gerek yoktur. Sadece eylemi gerçekleştirin (inşaat başlatın veya toplayıcı gönderin), skill'i kullanın ve hemen ana savaş zırhınızı tekrar takın.</p>
  `
},
{
  id: "forticlad-core", cat: "systems", icon: "🛑", title: "Forticlad Core",
  tagline: "Forticlad yükseltme gereksinimleri — barracks, command, communications ve hospital (F1–F8).",
  tags: ["Barracks", "Command", "Hospital", "F1-F8"],
  body: `
    <p>Forticlad yükseltmesi (barracks, command, communications ve hospital) için detaylı gereksinim listesi (<b>F1–F8</b>):</p>
    <div class="evidence-row">
      <figure class="evidence"><img src="${IMG}forticlad-core-1.jpg" alt="Forticlad Core requirements table 1" loading="lazy"><figcaption>Forticlad Core — gereksinim tablosu 1</figcaption></figure>
      <figure class="evidence"><img src="${IMG}forticlad-core-2.jpg" alt="Forticlad Core requirements table 2" loading="lazy"><figcaption>Forticlad Core — gereksinim tablosu 2</figcaption></figure>
    </div>
  `
},
{
  id: "forticlad-lab", cat: "systems", icon: "🛑", title: "Forticlad Laboratory",
  tagline: "Forticlad Laboratory sistemine dair tüm veriler — görsel referans galerisi.",
  tags: ["Laboratory", "Data Sheet"],
  body: `
    <div class="stub"><b>Not:</b> Bu bölüm "all data" notuyla birlikte tamamen ekran görüntüleri üzerinden paylaşılmıştır. Aşağıda kanaldaki referans görsellerinden bir seçki bulunuyor.</div>
    <div class="evidence-row">
      <figure class="evidence"><img src="${IMG}forticlad-lab-1.jpg" alt="Forticlad Laboratory reference 1" loading="lazy"><figcaption>Forticlad Laboratory — referans 1</figcaption></figure>
      <figure class="evidence"><img src="${IMG}forticlad-lab-2.jpg" alt="Forticlad Laboratory reference 2" loading="lazy"><figcaption>Forticlad Laboratory — referans 2</figcaption></figure>
    </div>
  `
},
{
  id: "equipment-reformation", cat: "systems", icon: "⚙️", title: "Equipment Reformation",
  tagline: "Ekipman reformasyon sistemi — görsel referans rehberi.",
  tags: ["Equipment", "Reformation"],
  body: `
    <div class="stub"><b>Not:</b> Bu kanal için yazılı bir açıklama paylaşılmamış; rehber ekran görüntüsü üzerinden anlatılmış. Detaylı yazılı strateji eklendiğinde bu sayfa güncellenecektir.</div>
    <figure class="evidence">
      <img src="${IMG}equipment-reformation.jpg" alt="Equipment Reformation panel" loading="lazy">
      <figcaption>KAYNAK — #EventsGuide ⚙️-equipment-reformation-⚙️</figcaption>
    </figure>
  `
},
{
  id: "generation-5", cat: "systems", icon: "🆕", title: "Generation 5",
  tagline: "Gen 5 kahramanları — Edwin, Lee ve Ada referans görselleri.",
  tags: ["Edwin", "Lee", "Ada", "New Heroes"],
  body: `
    <div class="stub"><b>Not:</b> Bu kanal için yazılı bir açıklama paylaşılmamış; Generation 5 kahramanları ekran görüntüleri üzerinden tanıtılmış.</div>
    <figure class="evidence">
      <img src="${IMG}generation5-overview.jpg" alt="Generation 5 overview" loading="lazy">
      <figcaption>Generation 5 — genel bakış</figcaption>
    </figure>
    <div class="evidence-row">
      <figure class="evidence"><img src="${IMG}gen5-edwin.jpg" alt="Generation 5 Edwin" loading="lazy"><figcaption>Gen 5 — Edwin</figcaption></figure>
      <figure class="evidence"><img src="${IMG}gen5-lee.jpg" alt="Generation 5 Lee" loading="lazy"><figcaption>Gen 5 — Lee</figcaption></figure>
    </div>
    <figure class="evidence">
      <img src="${IMG}gen5-ada.jpg" alt="Generation 5 Ada" loading="lazy">
      <figcaption>Gen 5 — Ada</figcaption>
    </figure>
  `
},
{
  id: "book-collection", cat: "systems", icon: "📕", title: "Book Collection",
  tagline: "Kitap koleksiyonu sistemi — görsel referans rehberi.",
  tags: ["Collection", "Books"],
  body: `
    <div class="stub"><b>Not:</b> Bu kanal için yazılı bir açıklama paylaşılmamış; rehber ekran görüntüleri üzerinden anlatılmış.</div>
    <div class="evidence-row">
      <figure class="evidence"><img src="${IMG}book-collection-1.jpg" alt="Book Collection reference 1" loading="lazy"><figcaption>Book Collection — referans 1</figcaption></figure>
      <figure class="evidence"><img src="${IMG}book-collection-2.jpg" alt="Book Collection reference 2" loading="lazy"><figcaption>Book Collection — referans 2</figcaption></figure>
    </div>
  `
},
{
  id: "collection", cat: "systems", icon: "🏆", title: "Collection",
  tagline: "Genel koleksiyon etkinliği için gerekli eşyalar.",
  tags: ["Collection Items"],
  body: `
    <p>Bu koleksiyon için gerekli olan eşyalar aşağıdaki gibidir:</p>
    <figure class="evidence">
      <img src="${IMG}collection.jpg" alt="Collection required items" loading="lazy">
      <figcaption>Collection — gerekli eşyalar listesi</figcaption>
    </figure>
  `
},
{
  id: "heroic-stars", cat: "systems", icon: "🦸", title: "Heroic Stars",
  tagline: "Kahraman yıldız sistemi — görsel referans rehberi.",
  tags: ["Heroic Stars", "Progression"],
  body: `
    <div class="stub"><b>Not:</b> Bu kanal için yazılı bir açıklama paylaşılmamış; rehber ekran görüntüsü üzerinden anlatılmış.</div>
    <figure class="evidence">
      <img src="${IMG}heroic-stars.jpg" alt="Heroic Stars panel" loading="lazy">
      <figcaption>KAYNAK — #EventsGuide 🦸‍♂️-heroic-stars-🦸‍♀️</figcaption>
    </figure>
  `
},

// ==========================================================================
// CODES & RESOURCES
// ==========================================================================
{
  id: "gift-codes", cat: "res", icon: "🎁", title: "Gift Codes",
  tagline: "Güncel redeem kodları ve Android / iOS kullanım talimatları.",
  tags: ["Redeem", "Android", "iOS"],
  body: `
    <p>Aşağıdaki kodları oyun içinde kullanarak ödül alabilirsiniz. Kod kutusuna tıklayarak panoya kopyalayabilirsiniz.</p>
    <div class="code-grid" id="code-grid">
      <div class="code-chip" data-code="VIP777"><span>VIP777</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="LOJ3648"><span>LOJ3648</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="LOJNOW"><span>LOJNOW</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="LOJ1478"><span>LOJ1478</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="loj777"><span>loj777</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="loj888"><span>loj888</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="loj5791"><span>loj5791</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="loj3579"><span>loj3579</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="LOJValentine214"><span>LOJValentine214</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="LOJplayonPC"><span>LOJplayonPC</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="KOF777"><span>KOF777</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="KOF888"><span>KOF888</span><span class="cp">KOPYALA</span></div>
      <div class="code-chip" data-code="KOF1234"><span>KOF1234</span><span class="cp">KOPYALA</span></div>
    </div>

    <h2>Kod Nasıl Kullanılır?</h2>
    <h3>Android</h3>
    <p>Oyun içinde: <b>Settings &gt; Redeem</b></p>
    <h3>iOS</h3>
    <p>Redemption sayfası üzerinden:<br>
    <a class="ext" href="https://dhcs-ios-cdkey.rebxgamebackup.com/" target="_blank" rel="noopener">dhcs-ios-cdkey.rebxgamebackup.com</a></p>
    <div class="callout">Kodlar zamanla süresi dolabilir. Çalışmayan bir kod görürseniz ittifak yönetimine bildirin.</div>
  `
},
{
  id: "heroes-roster", cat: "res", icon: "😎", title: "Heroes Roster",
  tagline: "Tüm kahramanlar ve efsanevi (legendary) kahramanlar listesi — tam roster görseli.",
  tags: ["All Heroes", "Legendary"],
  body: `
    <p>İttifağın <b>#Metin-Kanalları</b> bölümünden derlenen tam kahraman rosteri. Ordu kompozisyonu planlarken hızlı referans için kullanın.</p>
    <figure class="evidence">
      <img src="${IMG}heroes-roster.jpg" alt="All heroes roster" loading="lazy">
      <figcaption>Tüm Kahramanlar — tam liste</figcaption>
    </figure>
    <figure class="evidence">
      <img src="${IMG}heroes-legendary.jpg" alt="Legendary heroes" loading="lazy">
      <figcaption>Efsanevi (Legendary) Kahramanlar</figcaption>
    </figure>
  `
},
];

// ==========================================================================
// Render logic
// ==========================================================================
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function guideById(id){ return GUIDES.find(g => g.id === id); }

function renderNav(){
  const nav = $("#nav");
  let html = "";
  Object.keys(CATS).forEach(catKey => {
    const cat = CATS[catKey];
    const items = GUIDES.filter(g => g.cat === catKey);
    html += `<div class="nav-group">
      <div class="nav-group-label">${cat.icon} ${cat.label}</div>
      ${items.map(g => `
        <div class="nav-item" data-id="${g.id}" role="link" tabindex="0">
          <span class="ic">${g.icon}</span><span class="lbl">${g.title}</span>
        </div>`).join("")}
    </div>`;
  });
  nav.innerHTML = html;
  $$(".nav-item", nav).forEach(el => {
    el.addEventListener("click", () => goTo(el.dataset.id));
    el.addEventListener("keypress", e => { if(e.key === "Enter") goTo(el.dataset.id); });
  });
}

function cardTemplate(g){
  const cat = CATS[g.cat];
  return `<div class="card" data-id="${g.id}" tabindex="0" role="link">
    <div class="card-top">
      <div class="card-icon">${g.icon}</div>
      <div class="card-badge ${cat.badge}">${cat.label}</div>
    </div>
    <h3>${g.title}</h3>
    <p>${g.tagline}</p>
    <div class="card-foot"><span>${g.tags.slice(0,2).join(" · ")}</span><span class="go">İncele →</span></div>
  </div>`;
}

function renderOverview(){
  const grid = $("#overview-grid");
  grid.innerHTML = GUIDES.map(cardTemplate).join("");
  bindCards(grid);
}

function bindCards(root){
  $$(".card", root).forEach(el => {
    el.addEventListener("click", () => goTo(el.dataset.id));
    el.addEventListener("keypress", e => { if(e.key === "Enter") goTo(el.dataset.id); });
  });
}

function applyFilter(catKey){
  $$(".chip").forEach(c => c.classList.toggle("active", c.dataset.filter === catKey));
  const grid = $("#overview-grid");
  const list = catKey === "all" ? GUIDES : GUIDES.filter(g => g.cat === catKey);
  grid.innerHTML = list.length ? list.map(cardTemplate).join("") : `<div class="empty-state">Bu kategoride kayıt bulunamadı.</div>`;
  bindCards(grid);
}

function renderDetail(id){
  const g = guideById(id);
  if(!g){ goTo(null); return; }
  const cat = CATS[g.cat];
  const idx = GUIDES.indexOf(g);
  const prev = GUIDES[(idx - 1 + GUIDES.length) % GUIDES.length];
  const next = GUIDES[(idx + 1) % GUIDES.length];

  $("#detail-view").innerHTML = `
    <div class="detail">
      <div class="detail-head">
        <div class="hazard-line"></div>
        <button class="back-btn" id="back-btn">← Tüm Rehberlere Dön</button>
        <div class="dh-top">
          <div class="dh-icon">${g.icon}</div>
          <div class="dh-titles">
            <span class="dh-cat ${cat.badge}">${cat.icon} ${cat.label}</span>
            <h1>${g.title}</h1>
          </div>
        </div>
        <p class="dh-lead">${g.tagline}</p>
        <div class="dh-tags">${g.tags.map(t => `<span class="dtag">${t}</span>`).join("")}</div>
      </div>
      <div class="detail-body">
        ${g.body}
      </div>
      <div class="detail-nav-end">
        <div class="nav-end-btn" id="prev-btn"><div class="lbl">← Önceki</div><div class="ttl">${prev.icon} ${prev.title}</div></div>
        <div class="nav-end-btn right" id="next-btn"><div class="lbl">Sonraki →</div><div class="ttl">${next.icon} ${next.title}</div></div>
      </div>
    </div>
  `;

  $("#back-btn").addEventListener("click", () => goTo(null));
  $("#prev-btn").addEventListener("click", () => goTo(prev.id));
  $("#next-btn").addEventListener("click", () => goTo(next.id));

  $$(".code-chip", $("#detail-view")).forEach(chip => {
    chip.addEventListener("click", () => {
      const code = chip.dataset.code;
      navigator.clipboard?.writeText(code).catch(()=>{});
      chip.classList.add("copied");
      const cp = $(".cp", chip);
      const original = cp.textContent;
      cp.textContent = "KOPYALANDI";
      setTimeout(() => { chip.classList.remove("copied"); cp.textContent = original; }, 1400);
    });
  });

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function setActiveNav(id){
  $$(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.id === id));
}

function goTo(id){
  if(id){
    location.hash = id;
  } else {
    location.hash = "";
  }
}

function route(){
  const id = location.hash.replace("#","");
  const overview = $("#overview-view");
  const detail = $("#detail-view");
  if(id && guideById(id)){
    overview.classList.remove("active");
    detail.classList.add("active");
    renderDetail(id);
    setActiveNav(id);
  } else {
    detail.classList.remove("active");
    overview.classList.add("active");
    setActiveNav(null);
  }
  closeMobileNav();
}

function initFilters(){
  $$(".chip").forEach(chip => {
    chip.addEventListener("click", () => applyFilter(chip.dataset.filter));
  });
}

function initSearch(){
  const input = $("#search-input");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    $$(".nav-item").forEach(el => {
      const g = guideById(el.dataset.id);
      const hit = !q || g.title.toLowerCase().includes(q) || g.tagline.toLowerCase().includes(q) || g.tags.join(" ").toLowerCase().includes(q);
      el.style.display = hit ? "flex" : "none";
    });
  });
}

function openMobileNav(){ $(".sidebar").classList.add("open"); $(".scrim").classList.add("show"); }
function closeMobileNav(){ $(".sidebar").classList.remove("open"); $(".scrim")?.classList.remove("show"); }

function initMobile(){
  $("#nav-toggle")?.addEventListener("click", openMobileNav);
  $(".scrim")?.addEventListener("click", closeMobileNav);
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderOverview();
  initFilters();
  initSearch();
  initMobile();
  window.addEventListener("hashchange", route);
  route();
});
