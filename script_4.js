// Pratiquons les boucles avec le fameux Array de handle twitter :

const journaleux_array = ["@jcunniet","@PaulLampon","@Aziliz31","@ssoumier","@marionsouzeau","@gaellombart","@bendarag","@AurelieLebelle","@julienduffe","@thomaspoupeau","@LilyRossignol","@ClairGuedon","@stephanieauguy","@claw_prolongeau","@_JulieMenard","@LColcomb","@Zlauwereys","@MeLonguet","@DorotheeLN","@NolwennCosson","@ADaboval","@Remibaldy","@bderveaux","@amandechap","@ELODIESOULIE","@nbongarcon","@HeloAb","@Panamorama","@gregplou","@BenoitBerthe","@LauraBruneau89","@Anthony_Lieures","@Sharonwaj","@mcsonkin","@pverduzier","@emiliel3","@Julien_MARION","@SophiFay","@bdelombre","@annalecerf","@AdriaBudry","@DejNikolic","@iJaffre","@CyrusleVirus","@GPardigon","@e_vallerey","@IsabelleSouquet","@AudeDavidRossi","@Yoann_Pa","@CeliaPenavaire","@perraultvincent","@cboulate","@JustineWeyl","@Paulinejacot","@juliechab","@aslechevallier","@phnou","@Seb_Pommier","@Alex_Bensaid","@GuillaumeGaven","@annelaurechouin","@Oliviader","@guerricp","@JMMarchaut","@cyceron","@gregory_raymond","@vhunsinger","@l_peillon","@fannyguinochet","@EAssayag","@KibweAdom","@YvonHerry","@JohanGarciajg","@saidlabidi","@lauranneprov","@LeaDavy","@francois_remy","@CGuicheteau","@FloMaillet","@m_perroud","@oBrunet_TSMF","@MoonVdc","@jc2taille","@NellyMoussu","@VirginK","@b_misa","@FabriceCouste","@barbara_prose","@lelia2m","@brunoaskenazi","@laurenechamp","@ysisbox","@juliengagliardi","@PierreLel","@kdeniau","@_TerraInc","@DominicArpin","@antoinfonteneau","@nanotousch","@jb_roch","@YaniKhezzar","@Anne_Bechet","@NCapart","@SamyBenNaceur","@Joumany","@Julietteraynal","@TGiraudet","@SaraTanit","@HappeFrederic","@antoinellorca","@michelpicot","@Sev_Ryne","@bobdobolino","@murdever","@YGrandmontagne","@Mnyo","@EdKOSCIANSKI","@tnoisette","@jankari","@delbello_rom","@rflechaux","@NadiaSorelli","@IT_Digital","@abarbaux","@PhilippeLeroy","@schaptal","@marionspee","@lisavignoli","@ChloeAeberhardt","@MartineJacot","@JuliaPascualita","@curieusedetout","@sgraveleau","@bif_o","@ElisaPineau","@zinebdryef","@apiquard","@pierrehaski","@StephanieDelmas","@Blandine_Garot","@vergara_i","@evan_lebastard","@SophieVclt","@OlivierLevrault","@alicedorgeval","@LouiseMalnoy","@alix_fx","@pierre_baudis","@LucMagoutier","@AgatheMuller","@SGianninelli","@PaulineBoyer33","@NaomiHalll","@romaindlx","@marionbr","@Burtschy","@JacobEtienne","@as_lizzani","@marie_simon","@LaureDaussy","@FabriceAmedeo","@LoubnaChlaikhy","@PlummerWilliam","@OlivierMarin1","@alaurefremont","@mwesfreid","@ChBaDe","@pmathon","@theobaldmarie","@Lnpagesy","@marclandre","@paoliniesther","@Feertchak","@JBLitzler","@GuillaumeErrard","@quentinperinel","@TristanQM","@mlbo","@constancejamet","@LoraTerrazas","@emiliegeffray","@Mathilde_Sd","@CaroPiquet","@DCanivez","@TIM_7375","@blandinelc","@ivanrioufol","@arthurberdah","@SarahLecoeuvre","@guillaume_gui","@DamienMercereau","@W_Chloe","@Assma_MD","@EugenieBastie","@HiTech_lexpress","@bcondominas","@Laurie_Z_","@jeanfrancgerard","@MathieuPagura","@BGUYF","@AlainPiffaretti","@AudreyKucinskas","@julienhory","@Pierrefalga","@TiphThuillier","@cdaniez","@LigerBaptiste","@D_Peras","@julie_dlb","@Fatiha_Temmouri","@julian2lamancha","@GaetaneDeljurie","@JulianMattei","@M_Vicuna","@DeBruynOlivier","@Nehed_Jendoubi","@antoine_grenapi","@ColonnaGen","@VictoriaGairin","@Clement_Lacombe","@TVigoureux","@MargauxObriot","@solinedelos","@RocheSabine","@dangerkens","@EdouardDutour","@MDondeyne","@DupuisNathalie1","@bouscarel","@Mathieu2jean","@Sophie_T_J","@laurentcalixte","@patrockwilliams","@PascaleKremer","@AlexJaquin","@LauraIsaaz","@cath_robin","@Del_Gautherin","@Isaduriez","@lucietuile","@AugeyBastien","@mcastagnet","@AminaKalache","@mvaudano","@CParrot","@ombelinetips","@_JoinLion","@BarbolosiRose","@ToiBruno1","@FloraClodic","@xjbdx","@AlexiaEy","@Emjy_STARK","@elcoco01","@rabilebon","@pflovens_","@FabriceFrossard","@MorganeSERRES","@MarjolaineKoch","@edgarsnow","@SRNLF","@CChassigneux","@KerinecMoran","@NassiraELM","@NewsRicard","@Sandreene","@Emilezrt","@Pierre_Do","@Micode","@CColumelli","@DavidAbiker","@ClementBergantz","@benjaminrabier","@celinekallmann","@edwyplenel","@C_Barbier","@JJBourdin_RMC","@LaurenceFerrari","@aslapix","@IsaMillet","@MaximeSwitek","@tomjoubert","@jszanchi","@roqueeva","@XavierBiseul","@florencesantrot","@AntoineCrochet","@freeman59","@MaudeML","@philippe_gulpi","@mathieum76","@kiouari","@imanemoustakir","@BenedicteMallet","@Emilie_Brouze","@antoinebarret","@_nicolasbocquet","@remibuhagiar","@CourretB","@AymericRobert","@miraelmartins","@pmaniere","@jesuisraphk","@David_Ingram","@pcelerier","@technomedia","@Geraldinedauver","@ThierryLabro","@Newsdusud","@nrauline","@gbregeras","@SCouasnonBFM","@actualites_nrv","@dimitrimoulins","@oli_aura","@FabieChiche","@Vincent_Raimblt","@ChristophGreuet","@PAlbuchay","@MarrauddesGrot","@vtalmon","@cedric","@olivierfrigara","@Julien_Jay","@LydiaBerroyer","@Shuua","@datisdaz","@Steuph","@ameliecharnay","@Bruno_LesNums","@LelloucheNico","@CciliaDiQuinzio","@Elodie_C","@SylvRolland","@Kocobe","@FL_Debes","@jdupontcalbo","@GarciaVictor_","@NicoRichaud","@RHoueix","@simottel","@DamienLicata","@annabelle_L","@Lea_Lejeune","@axel_deb","@marin_eben","@ptiberry","@MatthieuDelach","@sandrinecassini","@benjaminferran","@ppgarcia75","@NotPatrick","@ivalerio","@FabienneSchmitt","@alexgoude","@JeromeColombain","@manhack","@Capucine_Cousin","@Fsorel","@oliviertesquet","@marjoriepaillon","@ginades","@PierreTran","@DelphineCuny","@reesmarc","@lauratenoudji","@ldupin","@carolinedescham","@Lucile_Quillet","@cgabizon","@Allocab","@epenser","@JAGventeprivee","@frwrds","@Laure__Bourdon","@Xavier75","@maximeverner","@s_jourdain","@LoriHelloc"];

//Créé un script script_4.js qui affichera dans ta console les réponses aux questions suivantes:

/*
Combien y a-t-il de journalistes dans cette array ?
Combien d'handles contiennent un numéro ?
Combien d'handles contiennent les 4 lettres du prénom "Aude" à la suite (sans prendre en compte les majuscules) ?
Combien commencent par une majuscule (première lettre juste après le @) ?

Combien contiennent une majuscule ?
Combien y a-t-il de underscore _ dans tous les pseudos confondus ?
Trie la liste de handles par ordre alphabétique.
Quels sont les 50 handles les plus courts de cette array ?
Quelle est la position dans l'array de la personne @epenser ?
*/


//1

nb_journaleux = journaleux_array.length

let question_1 = `il y a ${nb_journaleux} de mail de journaliste dans l'array`
console.log(question_1)


//2

let nb_journalist_with_number = 0

journaleux_array.forEach(maild1journaliste => {
  numero(maild1journaliste)
});

function numero(maild1journaliste) {
	let patt1 = /[0-9]/g; // faudrait essayer avec  /\d+/
	let result = maild1journaliste.match(patt1);
	if (result) {
  		nb_journalist_with_number++ 
	}};

let question_2 = `il y a ${nb_journalist_with_number} mails de journalistes avec un nombre dans cet array`;
console.log(question_2);


//3

let lowercased_journalist_array = [];
// lower case array creation
journaleux_array.forEach(maild1journaliste => {
  let a = maild1journaliste.toLowerCase()
  lowercased_journalist_array.push(a)
});

let nb_aude = 0;
lowercased_journalist_array.forEach(maild1journaliste => {
  audifier(maild1journaliste)
});


function audifier(maild1journaliste) {
	if (/aude/i.test(maild1journaliste)) {
  		nb_aude++ 
	}
};

let question_3 = `il y a ${nb_aude} mails de journalistes avec aude dans cet array`;
console.log(question_3);


// 4

let nb_start_with_uppcase = 0;
let nb_start_with_number = 0;
let nb_start_with_non_letter = 0;
let reg_number_pattern = /\d+/
let reg_alphabet_pattern = /^[a-zA-Z]*$/

for (let count = 0; count <= nb_journaleux; count++) {
	
	let original = journaleux_array[count];
	let transfo = lowercased_journalist_array[count];

	let first_char_original = `${original}`[1]
	let first_char_transfo = `${transfo}`[1]

	// first char is a letter? then compare if it's a uppcase
	if (first_char_original.match(reg_alphabet_pattern)) {
		if ( `${transfo}`[1] != `${original}`[1]) {
	 		nb_start_with_uppcase++ }	
	}

	else {
		nb_start_with_non_letter++
	}

}


let question_4 = `il y a ${nb_start_with_uppcase} mails de journalistes qui ceommencent avec une majuscule dans cet array`;
console.log(question_4);
console.log(`il y en a ${nb_start_with_non_letter} qui commencent pas par une lettre`)


// 5

let nb_uppcase_include = 0;
let reg_alphabet_uppcase_pattern = /[A-Z]/

journaleux_array.forEach(maild1journaliste => {
	includeuppercase(maild1journaliste)
	});

function includeuppercase(maild1journaliste) {
// console.log(maild1journaliste)
	if (reg_alphabet_uppcase_pattern.test(maild1journaliste)) {

  	nb_uppcase_include++ 
	}};


let question_5 = `il y a ${nb_uppcase_include} mails de journalistes qui contiennent une majuscule dans cet array`;
console.log(question_5);


// 6

let nb_lowertiret = 0;
let reg_tiretdubas = /[_]/

journaleux_array.forEach(maild1journaliste => {
	includetiretdubas(maild1journaliste)
	});

function includetiretdubas(maild1journaliste) {
	let mail_length = maild1journaliste.length
	for(let count = 0; count <=  mail_length; count++) {
		if (reg_tiretdubas.test(maild1journaliste[count])) {
  			nb_lowertiret++ 
		}
	}
};

let question_6 = `il y a ${nb_lowertiret} tiret du bas dans cet array`;
console.log(question_6);


// 7


let array_by_order = journaleux_array
array_by_order.sort()
console.log("voici les mails ranger dena sl'ordre alpha :")
console.log(array_by_order)


// 8

let array_by_length_order = journaleux_array

array_by_length_order.sort(function(a,b){
  return a.length - b.length; //ASC, For Descending order use: b - a
});

let fifty_first_shorter_email_array = array_by_length_order.slice(0,50);
console.log("voici les 50 mails les plus court :")
console.log(fifty_first_shorter_email_array);


// 9

let position_epenser = 0

for(let count = 0; count <= nb_journaleux; count++) {
		console.log(journaleux_array[count])
	if (/@epenser/i.test(journaleux_array[count])) {
console.log(`c'est ici ##### ${journaleux_array[count]} ###########`)

  		position_epenser = count 
	};
}

let question_9 = `epenser est en ${position_epenser} position`;
console.log(question_9);







