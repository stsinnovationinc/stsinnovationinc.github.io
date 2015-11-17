var onReady = function() {
	// This enables a language to be specified by adding '#en' or '#jp' to the end of the url
	// The page will switch to the new language after loading
	if(window.location.hash) {
		var hash = window.location.hash.substring(1);

		if(hash !== 'en') {
			swapLanguage(hash);
		}
	}
};

var langTable = {
	'en': {
		'string_home': 'HOME',
		'string_services': 'SERVICES',
		'string_about': 'ABOUT',
		'string_it_consulting': 'IT Consulting',
		'string_it_consulting_desc': 'Our consulting services are all about helping our clients succeed. We can help develop your business and improve your productivity with IT solutions tailored just for you.',
		'string_system_integration': 'System Integration',
		'string_system_integration_desc': 'We provide end-to-end services from planning and installation to operation and maintenance of mission-critical systems and information systems.',
		'string_market_entry': 'Japan Market Entry',
		'string_market_entry_desc': 'Need help launching your IT products and services in Japan? We can help by leveraging our existing customer base and business partners in Japan.',
		'string_erp_consulting': 'ERP Consulting',
		'string_erp_consulting_desc': 'We also provide complete end-to-end service for implementing and maintaining ERP systems. We support SAP, Oracle, and many more.',
		'string_ecommerce_solutions': 'E-Commerce Solutions',
		'string_ecommerce_solutions_desc': 'Mobile-based order entry systems are one of our specialities. We also offer e-commerce website solutions from start to finish and beyond.',
		'string_startup_support': '<div class="title text-center">Start-up Support for<br>Japanese Companies</div>',
		'string_startup_support_desc': 'We help Japanese companies launch their business in the United States by providing starter packages with our business partners.',
		'string_company_outline': 'Company Outline',
		'string_co_name_1': 'Company Name:',
		'string_co_name_2': 'STS Innovation, Inc.',
		'string_incorporated_1': 'Incorporated:',
		'string_incorporated_2': 'July, 2013',
		'string_capital_1': 'Capital:',
		'string_capital_2': '300,000 USD',
		'string_president_1': 'President &amp; CEO:',
		'string_president_2': 'Hiyoshi Kishida',
		'string_address_1': 'Main Office:',
		'string_address_2': '5201 Great America Pkwy<br>Suite 320<br>Santa Clara CA 95054',
		'string_share_holder_1': 'Share Holder:',
		'string_share_holder_2': 'System Support Inc. (100%)',
		'string_summary_title': 'We are a subsidiary of System Support Inc.,<br>an IT services company based in Japan',
		'string_summary_desc_1': 'As business becomes ever more globalized, there is an increasing need for corporate strategies that align with current operational trends. These include diversification of information, as well as compliance to global standards. Consequently, efficient use of information technology has become essential for successful business management.',
		'string_summary_desc_2': 'There is no denying that we live in a knowledge-based society. To that end, STS Innovation, Inc. meets the needs of its diverse client base through an emphasis on prompt and proactive service. We believe that in these times of economic uncertainty the only viable path is to listen closely to and meet the needs of our customers.',
		'string_summary_desc_3': 'We are currently engaged in the construction of a global business model. Our goal is to use create original, innovative, and responsive IT solutions by making full use of our position as an independent company as well as our wealth of in-house creativity.',
		'string_summary_desc_4': 'We are completely committed to our corporate values and to our customers, and we work hard to maintain our market leading position in the world of international business.',
	},
	'jp': {
		'string_home': 'HOME',
		'string_services': 'サービス',
		'string_about': '会社情報',
		'string_it_consulting': 'ITコンサルティング',
		'string_it_consulting_desc': 'お客様のビジネス成長やサービス向上のために､事業戦略を支える IT 戦略を､お客様と共に考え､ご支援致します｡',
		'string_system_integration': 'システム開発',
		'string_system_integration_desc': 'お客様の基幹系･情報系システムの設計・構築から運用・保守までをワンストップでご提供致します｡',
		'string_market_entry': '日本市場への参入支援',
		'string_market_entry_desc': '海外製の先進的なソフトウェアやサービスの日本市場でのビジネス開発やチャネル開拓など、弊社の顧客ベースやパートナー会社を活用しお客様のビジネス立ち上げをご支援致します。',
		'string_erp_consulting': 'ERPコンサルティング',
		'string_erp_consulting_desc': 'SAP、Oracleを中心に、業務コンサルティングから基盤運用までERPを活用する上で必要なすべてのソリューションをワンストップでご提供致します。',
		'string_ecommerce_solutions': 'eコマースソリューション',
		'string_ecommerce_solutions_desc': 'モバイル端末を活用した受発注システム、ECサイトの企画/設計/構築/保守をワンストップでご提供致します。',
		'string_startup_support': '<h4 class="title text-center">日系企業向け米国進出支援</h4>',
		'string_startup_support_desc': '日系企業が米国へビジネス進出する際に必要となるサービスを、各種パートナー会社とともにパッケージとしてご提供致します。',
		'string_company_outline': '会社概要',
		'string_co_name_1': '会社名',
		'string_co_name_2': 'STS Innovation, Inc.',
		'string_incorporated_1': '設立',
		'string_incorporated_2': '2013年7月',
		'string_capital_1': '資本金',
		'string_capital_2': '300,000 米ドル',
		'string_president_1': '代表取締役社長',
		'string_president_2': '岸田　陽世志',
		'string_address_1': '本社所在地',
		'string_address_2': '5201 Great America Pkwy<br>Suite 320<br>Santa Clara CA 95054',
		'string_share_holder_1': '株主',
		'string_share_holder_2': '株式会社システムサポート (100%)',
		'string_summary_title': 'STS Innovationは株式会社システムサポートの米国法人として2013年7月に設立されました。',
		'string_summary_desc_1': '現在、企業において、ビジネスの国際化が進み、情報の多様化、コンプライアンスの重視等、社会環境に配慮した企業戦略が求められる中、ＩＴ技術をいかに効率よく活用できるかが必要不可欠な経営課題となってきております。',
		'string_summary_desc_2': 'システムサポートグループは、この革新的な情報社会において、スピードと行動力を重視し、この不確実の時代に唯一確実な指標こそお客様にあると考え、これまで様々な分野において多くの実績を積んで参りました。',
		'string_summary_desc_3': 'これからのビジネス展開においては、独立系としてのオープンな立場とユニークな発想を最大限に活かしながら、世界を視野に入れたビジネスモデルの構築、イノベーションを主導的に創造する企業としてグローバルに挑戦して参ります。',
		'string_summary_desc_4': 'そして、世界から求められる先進的な企業であり続けるために、システムサポートグループらしい、新たな価値・サービスをお客様へご提供して参ります。',
	}
};

var swapLanguage = function(langCode) {
	// DEBUG
	console.log(langCode);

	if(langCode === 'en' || langCode === 'jp') {
		// Iterate through each language's strings and update the page
		for(var key in langTable[langCode]) {
			var val = langTable[langCode][key];
			console.log('key:', key, '|', 'value:', val);
			var elems = document.getElementsByClassName(key);
			console.log(elems);

			for(var i = 0; i < elems.length; i++) {
				elems[i].innerHTML = val;
			}
		}
	}
	else {
		console.error('Unrecognized language code');
	}
};