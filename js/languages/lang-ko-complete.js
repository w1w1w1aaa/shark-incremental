// Korean translation supplement maintained by w1w1w1aaa.
// Loaded after lang-ko.js so newly added English keys do not fall back to English.

const KO = LANGUAGES.KO.text

Object.assign(KO, {
    'tab-dna': 'DNA',
    'tab-shark-upgs': toTextStyle('상어','shark') + ' 업그레이드',
    'dna-descirption': `${toTextStyle('상어','shark')}의 <b>DNA(디옥시리보핵산)</b> 길이는 <h3 id="dna-length">???</h3> (<span id="dna-length-gain">???</span>)나노미터입니다.<br>
    ${toTextStyle('물고기','fish')}의 테트레이션을 <h4 id="dna-boost1">???</h4>만큼 증가시키고, 처음 4개 핵염기를 <h4 id="dna-boost2">???</h4>만큼 강화합니다.`,
    'dna-button': `강제로 ${toTextStyle('하드로나이즈','hadron')} 초기화하여 DNA를 확장합니다.`,
    'dna-note': `참고: DNA를 확장하면 ${toTextStyle('하드로나이즈','hadron')}가 초기화하는 모든 항목과 ${toTextStyle('기본 입자','hadron')}, 핵염기가 초기화됩니다.`,
    'shark-worth': bool => bool ? `${toColoredText('말 그대로 모든 것','red')}을 흡수하여 ${toTextStyle('상어','shark')}를 <h3>${toTextStyle('전능','omni')}</h3>의 존재로 변환합니다...` : `당신의 ${toTextStyle('상어','shark')}는 가치가 없습니다. 미안합니다...`,
    'research-all-btn': '구매할 수 있는 모든 연구 구매 시도',
})

Object.assign(KO['all-research'], {
    h13: ['물고기 평등', `${toTextStyle('환생','prestige')} 파편과 ${toTextStyle('마그마','core')} 조각 획득량이 이제 ${toTextStyle('물고기','fish')} 획득량과 같아집니다.`],
    h14: ['레벨과 랭크여, 잔혹한 세상이여 안녕!', `${toTextStyle('상어','shark')} 레벨과 랭크의 모든 스케일링을 제거합니다.`],
    h15: ['더 나은 핵염기 III', '아데닌의 여섯 번째 부스트를 개선합니다.'],
    h16: ['은하계 탐험 자동화', '탐험하지 않아도 처음 6개 은하계 바다의 점수를 자동으로 획득합니다.'],
    h17: ['신성한 DNA', `총 ${toTextStyle('기본 입자','hadron')}가 감소된 비율로 DNA 길이를 증가시킵니다.`],
    h18: ['완전한 물고기 DNA', `${toTextStyle('물고기','fish')}가 감소된 비율로 DNA 길이를 증가시킵니다.`],
    h19: ['강화된 아데닌', '아데닌의 네 번째 부스트를 크게 개선합니다... <i>끝이 다가오고 있습니다...</i>'],
    h20: ['강화된 구아닌', '구아닌의 네 번째 부스트가 이제 상어 티어의 다섯 번째 보너스에도 영향을 줍니다... <i>제발 이제 그만...</i>'],
    h21: ['강화된 DNA', `DNA가 스스로 확장됩니다... ${toColoredText('경고: 자가 확장 DNA는 상어를 심각하게 불안정하게 만들어 물고기를 먹지 못하게 하고, 물고기를 반물질 물고기로 바꾸게 합니다! 되돌릴 수 없습니다!','red')} 그래도 하시겠습니까?`],
    ge12: ['쓸모없는 스케일링', '블랙홀 티어의 처음 2개 스케일링을 제거합니다.'],
    tr1: ['스케일된 전능 상어의 힘', `'전능 상어의 힘' 스케일링 시작점을 레벨당 <b>+15</b>만큼 늦춥니다.`],
    tr2: ['전능 상어 민첩성의 영향', `'전능 상어 민첩성'이 10%의 비율로 '초월 전능 상어의 힘'과 '전능 상어 초월'의 베이스에 영향을 줍니다.`],
    tr3: ['더 나은 초월', `${toTextStyle('초월','transcend')} 파편 획득 공식을 조금 개선합니다.`],
    tr4: ['더 나은 초월 응축기', `응축된 ${toTextStyle('초월','transcend')} 파편을 조금 개선합니다.`],
    u1: ['더 나은 언데드 업그레이드', `'언데드 반물질'과 '언데드 초월'의 효과를 제곱합니다.`],
    u2: ['더 나은 언데드 수확량', `'언데드 수확량'의 비용 증가량을 줄입니다. <i>이 연구는 ${toTextStyle('상어 전능','omni')}을 해도 유지됩니다.</i>`],
    u3: ['언데드 영향', `게임 속도가 이제 ${toTextStyle('언데드 정수','undead')} 포획에 영향을 줍니다.`],
    u4: ['더 나은 언데드 응축기', `응축된 ${toTextStyle('언데드 정수','undead')}가 ${toTextStyle('언데드 정수','undead')}에 주는 효과를 크게 개선합니다.`],
    re1: ['연구 반응 유지기', `${toTextStyle('반응','atom')} 시 ${toTextStyle('연구','prestige')}를 유지합니다.`],
    d1: ['연구 반응 유지기+', `${toTextStyle('룬화','rune')} 시 ${toTextStyle('연구','prestige')}를 유지합니다.`],
    d2: ['더 나은 전능 상어 지수', `'전능 상어 지수' 공식을 개선합니다.`],
    d3: ['응축기 유지기 I', `${toTextStyle('룬화','rune')} 시 지금까지 응축한 최고 ${toTextStyle('초월','transcend')} 파편의 지수 제곱을 <b>^0.75</b>한 값으로 시작합니다.`],
    d4: ['응축기 유지기 II', `${toTextStyle('룬화','rune')} 시 지금까지 응축한 최고 ${toTextStyle('언데드 정수','undead')}로 시작합니다.`],
    d5: ['더 나은 룬 조각', `${toTextStyle('룬','rune')} 조각 획득량을 개선합니다.`],
    rc1: ['보너스 룬', `아무 ${toTextStyle('룬','rune')} 업그레이드 효과가 <b>100%</b> 증가할 때마다 해당 효과를 받는 보너스 ${toTextStyle('룬','rune')} 1개를 얻습니다.`],
    rc2: ['더 빠른 룬 업그레이드', `처음 3개 ${toTextStyle('룬','rune')} 업그레이드의 스케일링이 <b>×2</b> 늦게 시작합니다.`],
    rc3: ['약해진 형벌', `두 번째 ${toTextStyle('신','god')}의 형벌이 약해집니다.`],
    rc4: ['더 나은 룬 업그레이드', `처음 3개 ${toTextStyle('룬','rune')} 업그레이드를 개선합니다.`],
    rc5: ['룬 연속체', `더 이상 ${toTextStyle('룬','rune')}을 직접 배치할 수 없으며, 대신 네 번째 ${toTextStyle('룬','rune')} 업그레이드를 기준으로 룬 효과가 계산됩니다. ${toTextStyle('룬','rune')} 업그레이드를 자동화합니다.`],
})

KO['constellation-boosts'][9] = ['은하 초은하단', x => `블랙홀 티어의 스케일링이 ${x}만큼 느려집니다.`, x => '제공되는 효과가 없습니다.']
KO['constellation-boosts'][10] = ['우주', x => `${toTextStyle('물고기','fish')} 보유량의 지수 제곱을 ${x}만큼 증가시킵니다.`, x => '제공되는 효과가 없습니다.']
KO['constellation-boosts'][11] = ['다중우주', x => `${toTextStyle('물고기','fish')} 보유량의 테트레이션을 ${x}만큼 증가시킵니다.`, x => '제공되는 효과가 없습니다.']

KO.nucleobases.adenine[1][5] = x => `${toTextStyle('하드로나이즈','hadron')} 상한의 테트레이션을 ${x}만큼 증가시킵니다.`
KO.nucleobases.thymine[1][3] = x => `각 은하계 바다의 점수를 ${x}만큼 증가시킵니다.`
KO.nucleobases.thymine[1][4] = x => `은하계 바다 자원을 ${x}만큼 증가시킵니다.`
KO.nucleobases.uracil = ['우라실', [
    x => `${toTextStyle('물고기','fish')}의 테트레이션을 ${x}만큼 증가시킵니다.`,
    x => `처음 4개 핵염기를 ${x}만큼 강화합니다.`,
    x => `${toTextStyle('기본 입자','hadron')} 지수를 ${x}만큼 증가시킵니다.`,
    x => `<b>우라실</b> 경험치가 자신을 ${x}만큼 강화합니다.`,
]]

KO['gal-explore'][4] = [
    '항성의 바다', '플라스마',
    `${toTextStyle('별자리','star')} 자원을 얻을 수 없어 블랙홀 티어를 올릴 수 없습니다.`,
    x => `${toTextStyle('별자리','star')} 베이스와 자원을 ${x}만큼 증가시킵니다.`,
]
KO['gal-explore'][5] = [
    '사막의 바다', '마른 모래',
    `${toTextStyle('물고기','fish')}의 테트레이션이 절반으로 감소합니다.`,
    x => `이 바다 밖에서 ${toTextStyle('물고기','fish')}의 테트레이션을 ${x}만큼 증가시킵니다.`,
]

Object.assign(KO, {
    'dna-milestones': [
        '은하계 탐험 업그레이드 자동화를 해금합니다.',
        `${toTextStyle('물고기','fish')}가 ${toTextStyle('하드로나이즈','hadron')} 상한을 넘을 수 있지만 획득량이 매우 크게 감소합니다.`,
        `${toTextStyle('휴머노이드','humanoid')} 상어 획득량이 이제 ${toTextStyle('물고기','fish')} 획득량과 같아집니다.`,
        'DNA 부스트를 개선합니다.',
        'DNA의 첫 번째 부스트를 다시 개선합니다.',
        '다섯 번째 핵염기를 해금합니다.',
        `티민의 첫 번째 부스트가 마지막 ${toTextStyle('별자리','star')} 자원에 10% 비율로 영향을 줍니다.`,
        `${toTextStyle('상어','shark')} 티어 1,000부터 ${toTextStyle('물고기','fish')} 섭취량의 테트레이션을 증가시킵니다.`,
        'DNA를 자동으로 확장합니다.',
        'DNA의 두 번째 부스트가 우라실 부스트에 영향을 줍니다.',
    ],
    'omni-cutscene-texts': ['당신의 상어는 전능한 존재가 되었습니다...', '...하지만 그 대가는 무엇이었을까요?'],
})

Object.assign(KO, {
    'tab-omni-rewards': `${toTextStyle('전능','omni')} 보상`,
    'tab-shark-condenser': `${toTextStyle('상어','shark')} ${toTextStyle('응축기','omni')}`,
    'tab-undead': `${toTextStyle('언데드','undead')} 사냥꾼`,
    'tab-nucleus': `${toTextStyle('핵반응','atom')}`,
    'tab-actinium': `${toTextStyle('악티늄','atom')} 붕괴 계열`,
    'tab-particles': `${toTextStyle('원자','atom')} 입자`,
    'tab-isotopes': '동위원소',
    'tab-runes': `${toTextStyle('룬','rune')}`,
    'tab-rune-constructor': `${toTextStyle('룬','rune')} 생성기`,
    'tab-rune-sacrifice': `${toTextStyle('룬','rune')} 희생`,
    'tab-god': `${toTextStyle('상어 신','god')}`,
    'antimatter-div': `${toTextStyle('전능 상어<sup id="omni-tier"></sup>','omni')}가 <h2>${toTextStyle('0','antimatter','antimatter-amount')}</h2> <span id="antimatter-gain"></span>개의 물고기 반물질을 섭취했습니다.`,
    'antimatter-equivalent-div': `${toTextStyle('물고기','fish')} <b id="antimatter-equivalent">???</b>마리와 동일`,
    'undead-essence-html': `<h3>${toTextStyle('0','undead','undead-essence-amount')}</h3> <span id="undead-essence-gain"></span>개의 언데드 정수를 모았습니다.<br>
    게임 속도의 영향을 받지 않으며, 매초 ${toTextStyle('언데드 정수','undead')}를 잡을 확률은 <b id="undead-essence-chance">0%</b>입니다.`,
    'game-speed-div': `게임 속도: <b id="game-speed">???</b>`,
    'antimatter-god-div': `${toTextStyle('신','god')}의 형벌로 인해 ${toTextStyle('물고기 반물질','antimatter')}의 지수가 ${toTextStyle('1','god','antimatter-god-penalty')}제곱근으로 감소합니다.`,
    'rune-sacrifice-info': `${toTextStyle('룬','rune')}을 희생하면 더 이상 배치할 수 없지만, 다른 ${toTextStyle('룬','rune')}이 제공한 최고 수량의 영향을 받습니다. 도전 중에는 대부분의 ${toTextStyle('룬','rune')} 업그레이드가 작동하지 않으며 <b>게임 속도</b>가 로그 수준으로 감소합니다.`,
    'anti-fish-name': '물고기 반물질',
    'anti-fish-costName': toTextStyle('물고기 반물질','antimatter'),
    'transcend-name': '초월 파편',
    'transcend-costName': toTextStyle('초월','transcend') + ' 파편',
    'undead-name': '언데드 정수',
    'undead-costName': toTextStyle('언데드 정수','undead'),
    'nucleus-name': '원자핵',
    'nucleus-costName': toTextStyle('원자핵','atom'),
    'rune-fragments-name': '룬 조각',
    'rune-fragments-costName': toTextStyle('룬','rune') + ' 조각',
    'curr-top-7-req': x => `총 <b>${format(x)}</b>개의 ${toTextStyle('물고기 반물질','antimatter')}에 도달하세요`,
    'curr-top-7-reset': x => `초월하여 <b>${x.format(0)}</b>개의 ${toTextStyle('초월','transcend')} 파편 획득`,
    'curr-top-8-req': x => `<b>${format(x)}</b>개의 ${toTextStyle('초월','transcend')} 파편에 도달하세요`,
    'curr-top-8-reset': x => `반응하여 <b>${x.format(0)}</b>개의 ${toTextStyle('원자핵','atom')} 획득`,
    'curr-top-9-req': x => `총 <b>${format(x)}</b>개의 ${toTextStyle('물고기 반물질','antimatter')}에 도달하세요`,
    'curr-top-9-reset': x => `룬화하여 <b>${x.format(0)}</b>개의 ${toTextStyle('룬','rune')} 조각 획득`,
    'omni-shark-button': `모든 것을 응축하여 ${toTextStyle('상어','shark')}의 ${toTextStyle('전능','omni')}을 높이고 강력한 보상을 받습니다.<hr class="line"><b>요구량:</b> <span id="omni-require"></span>`,
    'omni-tier': `${toTextStyle('전능','omni')} 티어`,
    'omni-other-requirements': {
        7: `${toTextStyle('초월','transcend')}하기`,
        20: `${toTextStyle('반응','atom')}하기`,
    },
    'omni-rewards': {
        2: x => `${x}의 베이스로 ${toTextStyle('물고기 반물질','antimatter')}을 생성하기 시작합니다.`,
        5: x => `'전능 상어 민첩성'이 ${toTextStyle('전능','omni')} 티어 2 보상에 영향을 줍니다.`,
        7: x => `${toTextStyle('초월','transcend')}을 해금합니다.`,
        9: x => `전능 상어 ${toTextStyle('물고기 반물질','antimatter')} 업그레이드 자동화를 해금합니다. 해당 업그레이드는 더 이상 ${toTextStyle('물고기 반물질','antimatter')}을 소모하지 않습니다.`,
        10: x => `${toTextStyle('상어','shark')} ${toTextStyle('전능','omni')} 후에도 유지되는 ${toTextStyle('상어','shark')} ${toTextStyle('응축기','omni')}를 해금합니다.`,
        11: x => `'초월 전능 상어의 힘'과 '전능 상어 초월'의 베이스가 ${x}만큼 증가합니다.`,
        12: x => `${toTextStyle('연구','prestige')}를 해금합니다.`,
        15: x => `매초 ${x} 확률로 ${toTextStyle('언데드 정수','undead')}를 모으기 시작합니다.`,
        16: x => `${toTextStyle('언데드 정수','undead')}를 응축해 유지되는 부스트를 얻을 수 있습니다.`,
        19: x => `전능 상어 ${toTextStyle('초월','transcend')} 업그레이드 자동화를 해금합니다. 해당 업그레이드는 더 이상 ${toTextStyle('초월','transcend')} 파편을 소모하지 않습니다.`,
        20: x => `${toTextStyle('원자핵','atom')}을 해금합니다. 초기화 시 획득할 ${toTextStyle('초월','transcend')} 파편의 ${x}를 수동 생성하며, 게임 속도의 <b>1%</b>만 적용됩니다.`,
        22: x => `${toTextStyle('언데드 정수','undead')} 업그레이드 자동화를 해금합니다. 자원을 소모하지 않습니다.`,
        24: x => `${toTextStyle('원자핵','atom')}을 응축해 유지되는 부스트를 얻을 수 있습니다. ${toTextStyle('초월','transcend')} 파편이 응축 최고 기록을 갱신합니다.`,
        28: x => `동위원소를 해금합니다. ${toTextStyle('상어','shark')} ${toTextStyle('전능','omni')} 시 '연구 반응 유지기' 연구를 유지합니다.`,
        30: x => `${toTextStyle('원자핵','atom')} 자동화를 해금합니다. 자원을 소모하지 않습니다. ${toTextStyle('언데드 정수','undead')}가 응축 최고 기록을 갱신합니다.`,
        32: x => `초기화 시 획득할 ${toTextStyle('원자핵','atom')}의 ${x}를 수동 생성하며, 게임 속도의 <b>^0.1</b>만 적용됩니다.`,
        36: x => `${toTextStyle('전능','omni')} 티어 32 보상의 비율이 ${x}로 증가합니다.`,
        40: x => `${toTextStyle('룬화','rune')}를 해금합니다. ${toTextStyle('원자핵','atom')}이 응축 최고 기록을 갱신합니다.`,
        41: x => `${toTextStyle('룬','rune')} 조각이 ${x}배 증가합니다. ${toTextStyle('전능','omni')} 티어 15 보상이 항상 <b>100%</b>가 됩니다.`,
        43: x => `${toTextStyle('룬','rune')} 조각을 응축해 유지되는 부스트를 얻을 수 있습니다.`,
        44: x => `우루즈 ${toTextStyle('룬','rune')}의 베이스가 ${x}로 증가합니다.`,
        48: x => `${toTextStyle('룬','rune')} 희생을 해금합니다.`,
        50: x => `첫 번째 ${toTextStyle('신','god')}의 형벌이 ${x}만큼 약해집니다. ${toTextStyle('룬화','rune')} 시 동위원소를 유지합니다.`,
        53: x => `${toTextStyle('전능','omni')} 티어 41 보상을 개선합니다.`,
        56: x => `초기화 시 획득할 ${toTextStyle('룬','rune')} 조각의 ${x}를 수동 생성합니다. 룬 조각이 응축 최고 기록을 갱신합니다.`,
        60: x => `첫 번째 ${toTextStyle('신','god')}의 형벌이 사라집니다. <i>세 단계 남았습니다...</i>`,
        63: x => `${toTextStyle('신','god')}이 모든 형벌을 거두고 ${toTextStyle('???','god')}라는 ${toTextStyle('궁극','god')} 단계를 해금하도록 허락합니다.`,
    },
    'su-os1-req': `${toTextStyle('전능','omni')} 티어 3`,
    'su-os1-name': '전능 상어의 힘',
    'su-os1-desc': `레벨당 ${toTextStyle('물고기 반물질','antimatter')} 섭취량이 두 배가 됩니다.`,
    'su-os2-req': `${toTextStyle('전능','omni')} 티어 4`,
    'su-os2-name': '전능 상어 민첩성',
    'su-os2-desc': `레벨당 '전능 상어의 힘' 베이스가 <b>+1</b> 증가합니다.`,
    'su-os3-req': `${toTextStyle('전능','omni')} 티어 6`,
    'su-os3-name': '전능 상어 시너지',
    'su-os3-desc': `레벨당 ${toTextStyle('물고기 반물질','antimatter')} 섭취량이 <b>×lg(${toTextStyle('물고기 반물질','antimatter')})</b> 증가합니다.`,
    'su-os4-req': `${toTextStyle('전능','omni')} 티어 29`,
    'su-os4-name': '전능 상어 지수',
    'su-os4-desc': `레벨당 ${toTextStyle('물고기 반물질','antimatter')} 지수가 <b>+1%</b> 증가합니다.`,
    'su-t1-req': `${toTextStyle('전능','omni')} 티어 7`,
    'su-t1-name': '초월 전능 상어의 힘',
    'su-t1-desc': `레벨당 ${toTextStyle('물고기 반물질','antimatter')} 섭취량이 세 배가 됩니다.`,
    'su-t2-req': `${toTextStyle('전능','omni')} 티어 9`,
    'su-t2-name': '전능 상어 초월',
    'su-t2-desc': `레벨당 ${toTextStyle('초월','transcend')} 파편 획득량이 두 배가 됩니다.`,
    'condense': '응축',
    'condensed': x => `(${x} 응축됨)`,
    'condensers': [
        x => `${toTextStyle('초월','transcend')} 파편에 ${x} 부스트`,
        x => `${toTextStyle('언데드 정수','undead')}와 <b>게임 속도</b>에 ${x} 부스트`,
        x => `${toTextStyle('원자핵','atom')}과 <b>붕괴 수확량</b>에 ${x} 부스트`,
        x => `${toTextStyle('룬','rune')} 조각에 ${x} 부스트`,
    ],
    'undead-upgrades': [
        ['언데드 물고기', x => `${toTextStyle('물고기 반물질','antimatter')}을 ${x}만큼 거듭제곱합니다.`],
        ['언데드 환생', x => `${toTextStyle('초월','transcend')} 파편을 ${x}만큼 거듭제곱합니다.`],
        ['언데드 확률', x => `${toTextStyle('언데드 정수','undead')} 포획 확률이 ${x}만큼 증가합니다.`],
        ['언데드 수확량', x => `${toTextStyle('언데드 정수','undead')}가 ${x}만큼 증가합니다.`],
        ['언데드 반물질', x => `${toTextStyle('언데드 정수','undead')}가 ${x}만큼 증가합니다.`],
        ['언데드 초월', x => `${toTextStyle('언데드 정수','undead')}가 ${x}만큼 증가합니다.`],
        ['언데드의 힘', x => `1, 2, 5, 6번째 ${toTextStyle('언데드','undead')} 업그레이드가 ${x}만큼 강해집니다.`],
        ['언데드의 힘 II', x => `'언데드의 힘'의 위력이 ${x}로 증가합니다.`],
    ],
})

Object.defineProperties(KO, {
    'reset-transcend-message': {
        enumerable: true,
        get() {
            let p = toTextStyle('초월','transcend'), s = toTextStyle('전능 상어','omni'), f = toTextStyle('물고기 반물질','antimatter')
            return `<h3>${p}</h3><br>
            ${p}은 첫 번째 전능 초기화 단계입니다. 초월하면 ${s} 업그레이드와 ${f}이 초기화되는 대신 ${toTextStyle('초월','transcend')} 파편을 획득합니다.
            첫 ${p}은 새로운 ${s} 업그레이드를 해금합니다.<br>
            <img src="textures/TranscendentalShard.png"><br>
            정말 초월하시겠습니까?`
        },
    },
    'reset-reaction-message': {
        enumerable: true,
        get() {
            let c = toTextStyle('반응','atom'), m = toTextStyle('원자핵','atom'), p = toTextStyle('초월','transcend')
            return `<h3>${c}</h3><br>
            ${c}은 두 번째 전능 초기화 단계입니다. 반응하면 ${p}이 초기화하는 모든 항목과 ${p} 파편, ${p} 업그레이드, 일부 ${toTextStyle('연구','prestige')}, ${toTextStyle('언데드 정수','undead')}가 초기화되는 대신 ${m}을 획득합니다.<br>
            <img src="textures/Nucleus.png"><br>
            정말 반응하시겠습니까?`
        },
    },
    'reset-runeification-message': {
        enumerable: true,
        get() {
            let c = toTextStyle('룬화','rune'), m = toTextStyle('룬','rune'), p = toTextStyle('반응','atom')
            return `<h3>${c}</h3><br>
            ${c}는 세 번째 전능 초기화 단계입니다. 룬화하면 ${p}이 초기화하는 모든 항목과 ${toTextStyle('원자핵','atom')}, ${toTextStyle('악티늄','atom')} 방사성 붕괴, ${toTextStyle('원자','atom')} 입자, 동위원소, 일부 연구가 초기화되는 대신 ${m} 조각을 획득합니다.<br>
            <subtitle>룬화 이전 ${toTextStyle('응축기','omni')}도 초기화되며, ${toTextStyle('전능','omni')} 티어 40 이후의 응축기도 마찬가지입니다. 대부분의 ${m} 기능은 ${toTextStyle('상어','shark')} ${toTextStyle('전능','omni')} 후에도 유지되지만 ${m} 조각은 초기화됩니다.</subtitle>
            <img src="textures/Rune.png"><br>
            정말 룬화하시겠습니까?`
        },
    },
    'progress-28-cond-text': { enumerable: true, get() { return `${toTextStyle('초월','transcend')}하기` } },
    'progress-29-cond-text': { enumerable: true, get() { return `${toTextStyle('반응','atom')}하기` } },
    'progress-30-cond-text': { enumerable: true, get() { return `${toTextStyle('룬화','rune')}하기` } },
    'progress-27-cond-text': { enumerable: true, get() { return '가치 증명하기...' } },
})

Object.assign(KO, {
    'confirm-transcend': '초월',
    'confirm-reaction': '반응',
    'confirm-runeification': '룬화',
    'progress-28-text': r => `총 ${format(r)}개의 ${toTextStyle('물고기 반물질','antimatter')}에 도달하세요`,
    'progress-29-text': r => `${format(r)}개의 ${toTextStyle('초월','transcend')} 파편에 도달하세요`,
    'progress-30-text': r => `총 ${format(r)}개의 ${toTextStyle('물고기 반물질','antimatter')}에 도달하세요`,
    'progress-31-text': r => '???',
    'auto-osu-name': `전능 상어 ${toTextStyle('물고기 반물질','antimatter')} 업그레이드 자동화`,
    'auto-ostu-name': `전능 상어 ${toTextStyle('초월','transcend')} 업그레이드 자동화`,
    'auto-ue-name': `${toTextStyle('언데드 정수','undead')} 업그레이드 자동화`,
    'auto-nucleus-name': `${toTextStyle('원자핵','atom')} 자동화`,
    'god-info': `"다시 말한다. ${toTextStyle('상어 신','god')}은 마지막 단계로 가게 해준다! 그러면 지금까지의 모든 것이 사라지고 되돌릴 수 없다! 하지만 ${toTextStyle('상어 신','god')}은 ${toTextStyle('신의 우주','god')}를 거의 넘어서는 ${toTextStyle('전능 물고기','god')}를 생산할 능력을 준다. 아니면... ${toTextStyle('상어','shark')}가 다시 태어날 준비가 거의 끝났다는 뜻일지도... 선택의 여지는 없다..."`,
    'overmodify-shark': `${toTextStyle('상어','shark')}를 초월 개조합니다.`,
    'god-fish-div': `${toTextStyle('상어 신','god')}이 <h2>${toTextStyle('0','god','god-fish-amount')}</h2> <span id="god-fish-gain"></span>마리의 전능 물고기를 소멸시켰습니다.`,
    'omni-fish-name': '전능 물고기',
    'omni-fish-costName': toTextStyle('전능 물고기','god'),
    endings: [
        '축하합니다! 다음 시간 만에 게임을 완료했습니다:',
        `${toTextStyle('상어','shark')}를 ${toTextStyle('환생','rebirth')}시켜 추가 콘텐츠를 진행하거나, 게임을 불러오거나, 이전 상태로 되돌릴 수 있습니다.`,
    ],
    'ending-options': [
        `${toTextStyle('상어','shark')} ${toTextStyle('환생','rebirth')}`,
        '입력창에서 불러오기',
        '파일에서 불러오기',
        '이전 상태로 되돌리기',
    ],
    'tab-rebirth': `${toTextStyle('환생','rebirth')}`,
    'tab-rebirth-upgs': `${toTextStyle('환생','rebirth')} 업그레이드`,
    'tab-rebirth-past10': `최근 10회 ${toTextStyle('환생','rebirth')}`,
    'rebirth-points-div': `<h3>${toTextStyle('???','rebirth','rebirth-amount')}</h3>개의 환생 포인트를 보유하고 있으며, 전역 배율에 <h3>${toTextStyle('???','rebirth','global-mult')}</h3>를 제공합니다.`,
    'rebirth-upgrades': [
        ['고전 자동화', `${toTextStyle('상어','shark')}, ${toTextStyle('환생','prestige')}, ${toTextStyle('핵','core')} 자동화를 영구적으로 해금합니다.`],
        ['은하계 채광', `${toTextStyle('진화','humanoid')}와 ${toTextStyle('특이점','black-hole')} 자동화를 영구적으로 해금합니다.`],
        ['하드론 조립기', `${toTextStyle('하드론','hadron')} 관련 자동화를 영구적으로 해금합니다.`],
        ['반물질 자동화 I', `${toTextStyle('전능','omni')} 관련 자동화를 영구적으로 해금합니다.`],
        ['반물질 자동화 II', `초기화 없이 ${toTextStyle('전능','omni')} 티어를 자동 갱신합니다.`],
        ['고전 생성', `${toTextStyle('환생','prestige')} 포인트와 ${toTextStyle('마그마','core')} 조각의 자동 생성을 영구적으로 해금합니다.`],
        ['휴머노이드 상어 개체군', `${toTextStyle('휴머노이드','humanoid')} 상어 자동 생성을 영구적으로 해금합니다.`],
        ['자가 복제 입자', `${toTextStyle('특이점','black-hole')} 관련 자원과 ${toTextStyle('기본 입자','hadron')} 자동 생성을 영구적으로 해금합니다.`],
        ['반물질 삼위일체', `${toTextStyle('전능','omni')} 관련 자동 생성을 영구적으로 해금합니다.`],
        ['추가 배율', '전역 배율을 <b>+50%</b> 더 획득합니다.'],
    ],
    'rebirth-upgrades-note': '참고: 대부분의 환생 업그레이드는 아직 구현 여부가 확실하지 않습니다. 효과가 없는 업그레이드를 발견하면 개발자에게 알려주세요.',
    'rebirth-time': `${toTextStyle('환생','rebirth')}에서 플레이한 시간`,
    'rebirth-points': `${toTextStyle('환생','rebirth')} 포인트`,
    'global-mult-title': '전역 배율 구성 요소',
    'global-mults': {
        base: x => `${x} 기본 배율`,
        time: x => `가장 빠른 ${toTextStyle('환생','rebirth')} 기록에서 ${x}`,
        other: x => `기타 출처에서 ${x}`,
    },
    'auto-gal_eu-name': '은하계 탐험 업그레이드 자동화',
    'progress-25-text': r => `총 ${format(r)}마리의 ${toTextStyle('물고기','fish')}에 도달해 다음 콘텐츠를 해금하세요`,
    'progress-26-text': r => `DNA 길이 ${format(r)}nm에 도달해 다섯 번째 핵염기를 해금하세요`,
    'progress-27-text': r => `당신의 ${toTextStyle('상어','shark')}가 가치 있다는 것을 증명할 요구 조건은 알려주지 않겠습니다!`,
    goal: '목표',
    picked: '선택됨',
})

Object.assign(KO.scalings, {
    decay_series: '붕괴 원자핵',
    isotopes: '동위원소',
    rune_upg1: '처음 3개 룬 업그레이드',
    rune_upg2: '네 번째 룬 업그레이드',
})
KO['shark-tier-bonuses'].fish2 = x => `${toTextStyle('물고기','fish')} 테트레이션에 ${x}`
Object.assign(KO['popup-desc'], {
    'rebirth-confirm': `${toTextStyle('환생','rebirth')}은 본편 진행 속도를 높여 주는 엔딩 이후 기능입니다. 상어를 ${toTextStyle('환생','rebirth')}시키면 옵션과 휴머노이드 트리 프리셋을 제외하고 가능한 모든 것이 초기화됩니다. 환생 포인트 1개를 얻고 거의 모든 재화에 적용되는 전역 배율이 증가합니다. 환생 포인트로 업그레이드를 구매해 진행 속도를 높일 수 있습니다.<br><br>정말 상어를 환생시키겠습니까?`,
    'rebirth-undo': '정말 이전 상태로 되돌리겠습니까?',
})
KO['radio-desc']['condenser-ratio'] = ['응축 비율', ['10%','25%','50%','100%']]

KO['decay-series-boosts'] = [
    [x => `'언데드 수확량'의 베이스를 ${x}만큼 증가시킵니다.`, x => `${toTextStyle('언데드 정수','undead')} 포획 확률을 ${x}만큼 증가시킵니다.`],
    [x => `${toTextStyle('물고기 반물질','antimatter')}을 ${x}만큼 거듭제곱합니다.`],
    [x => `${toTextStyle('초월','transcend')} 파편을 ${x}만큼 거듭제곱합니다.`],
    [x => `처음 3개 전능 상어 ${toTextStyle('물고기 반물질','antimatter')} 업그레이드를 ${x}만큼 강화합니다.`, x => `전능 상어 ${toTextStyle('초월','transcend')} 업그레이드를 ${x}만큼 강화합니다.`, x => `네 번째 전능 상어 ${toTextStyle('물고기 반물질','antimatter')} 업그레이드를 ${x}만큼 강화합니다.`],
    [x => `처음 7개 ${toTextStyle('언데드','undead')} 업그레이드를 ${x}만큼 강화합니다.`],
    [x => `'언데드 반물질'과 '언데드 초월'의 효과를 ${x}만큼 거듭제곱합니다.`],
    [x => `전능 상어 ${toTextStyle('물고기 반물질','antimatter')} 업그레이드 비용을 ${x}제곱근으로 감소시킵니다.`],
    [x => `처음 4개 원자핵을 ${x}만큼 강화합니다.`, x => '첫 번째 부스트가 5~7번째 원자핵에 영향을 줍니다.'],
    [x => `${toTextStyle('언데드 정수','undead')}를 ${x}만큼 거듭제곱합니다.`],
    [x => `응축된 ${toTextStyle('원자핵','atom')} 효과를 ${x}만큼 거듭제곱합니다.`, x => `알파 입자 효과를 ${x}만큼 거듭제곱합니다.`],
    [x => `다음 동위원소 요구량을 ${x}로 나눕니다.`],
    [x => `${toTextStyle('물고기 반물질','antimatter')} 지수를 ${x}만큼 거듭제곱합니다.`],
    [x => `${toTextStyle('초월','transcend')} 파편 지수를 ${x}만큼 거듭제곱합니다.`],
    [x => `8번째 ${toTextStyle('언데드','undead')} 업그레이드를 ${x}만큼 강화합니다.`],
    [x => `8~10번째 원자핵을 ${x}만큼 강화합니다.`, x => '첫 번째 부스트가 11~13번째 원자핵에 영향을 줍니다.'],
    [x => `헬륨-3의 베이스를 ${x}만큼 거듭제곱합니다.`],
    [x => `매초 <sup>235</sup>U 원자핵을 ${x}개 생성하며 게임 속도의 영향을 받습니다.`],
]

Object.assign(KO, {
    'full-element-name': [
        '중성자늄',
        '수소','헬륨','리튬','베릴륨','붕소','탄소','질소','산소','플루오린','네온',
        '나트륨','마그네슘','알루미늄','규소','인','황','염소','아르곤','칼륨','칼슘',
        '스칸듐','타이타늄','바나듐','크로뮴','망가니즈','철','코발트','니켈','구리','아연',
        '갈륨','저마늄','비소','셀레늄','브로민','크립톤','루비듐','스트론튬','이트륨','지르코늄',
        '나이오븀','몰리브데넘','테크네튬','루테늄','로듐','팔라듐','은','카드뮴','인듐','주석',
        '안티모니','텔루륨','아이오딘','제논','세슘','바륨','란타넘','세륨','프라세오디뮴','네오디뮴',
        '프로메튬','사마륨','유로퓸','가돌리늄','터븀','디스프로슘','홀뮴','어븀','툴륨','이터븀',
        '루테튬','하프늄','탄탈럼','텅스텐','레늄','오스뮴','이리듐','백금','금','수은',
        '탈륨','납','비스무트','폴로늄','아스타틴','라돈','프랑슘','라듐','악티늄','토륨',
        '프로트악티늄','우라늄','넵투늄','플루토늄','아메리슘','퀴륨','버클륨','캘리포늄','아인슈타이늄','페르뮴',
        '멘델레븀','노벨륨','로렌슘','러더포듐','더브늄','시보귬','보륨','하슘','마이트너륨','다름슈타튬',
        '뢴트게늄','코페르니슘','니호늄','플레로븀','모스코븀','리버모륨','테네신','오가네손',
    ],
    'decay-chain-max': '최대 구매',
    'decay-chain-buy-all': '구매 가능한 모든 원자 구매 시도',
    'alpha-particle-div': `붕괴한 원자핵이 알파 입자 <h3 id="alpha-particle-amount">0</h3>개 <span id="alpha-particle-gain"></span>를 생성했으며, ${toTextStyle('원자핵','atom')}을 <h3 id="alpha-particle-effect">???</h3>만큼 강화합니다.`,
    'beta-particle-div': `붕괴한 원자핵이 베타 입자 <h3 id="beta-particle-amount">0</h3>개 <span id="beta-particle-gain"></span>를 생성했으며, 게임 속도를 <h3 id="beta-particle-effect">???</h3>만큼 강화합니다.`,
    'gamma-ray-particle-div': `우라늄-236 원자핵이 감마선 <h3 id="gamma-ray-particle-amount">0</h3>개 <span id="gamma-ray-particle-gain"></span>를 생성했으며, 알파와 베타 입자를 <h3 id="gamma-ray-particle-effect">???</h3>만큼 강화합니다.`,
    'energy-particle-div': `우라늄-236 원자핵이 에너지 <h3 id="energy-particle-amount">0</h3> <span id="energy-particle-gain"></span>MeV를 생성했으며, 붕괴 수확량을 <h3 id="energy-particle-effect">???</h3>만큼 강화합니다.`,
    'barium-particle-div': `우라늄-236 원자핵이 바륨-141 원자핵 <h3 id="barium-particle-amount">0</h3>개 <span id="barium-particle-gain"></span>를 생성했으며, ${toTextStyle('물고기 반물질','antimatter')}을 <h3 id="barium-particle-effect">???</h3>만큼 강화합니다.`,
    'krypton-particle-div': `우라늄-236 원자핵이 크립톤-92 원자핵 <h3 id="krypton-particle-amount">0</h3>개 <span id="krypton-particle-gain"></span>를 생성했으며, ${toTextStyle('초월','transcend')} 파편을 <h3 id="krypton-particle-effect">???</h3>만큼 강화합니다.`,
    'uranium-235-fission': '우라늄-235에 중성자 하나를 넣어 핵분열을 시작합니다.',
    'isotopes-div': `동위원소 <h3 id="isotopes-amount">0 / 0</h3>개를 보유하고 있습니다. (<h4 id="isotopes-next">???</h4> ${toTextStyle('원자핵','atom')}에서 +1)
    <subtitle>참고: 동위원소를 낮추면 강제로 ${toTextStyle('반응','atom')} 초기화가 실행됩니다. 동위원소 위에 마우스를 올리면 효과를 확인할 수 있습니다.</subtitle>`,
})

KO['isotope-rewards'] = [
    [
        x => `${toTextStyle('원자핵','atom')} 베이스의 지수가 ${x}만큼 증가합니다.`,
        x => `${toTextStyle('원자핵','atom')} 베이스의 지수가 ${x}만큼 증가합니다.`,
        x => `${toTextStyle('원자핵','atom')} 베이스의 지수가 ${x}만큼 증가합니다.`,
        x => `${toTextStyle('원자핵','atom')} 베이스의 지수가 ${x}만큼 증가합니다.`,
    ],[
        x => `'언데드 반물질'과 '언데드 초월' 보유량의 제곱근마다 ${toTextStyle('언데드 정수','undead')}가 ${x[0]}배 증가합니다. (현재 ${x[1]})`,
        x => `이 동위원소 하나당 첫 번째 동위원소의 베이스가 ${x[0]}만큼 증가합니다. (현재 ${x[1]})`,
        x => `첫 번째 동위원소의 지수가 ${x}로 증가합니다.`,
        x => `첫 번째 동위원소의 지수가 ${x}로 증가합니다.`,
        x => `첫 번째 동위원소의 지수가 ${x}로 증가합니다.`,
    ],[
        x => `${toTextStyle('초월','transcend')} 파편 베이스의 지수가 ${x}만큼 증가합니다.`,
        x => `${toTextStyle('초월','transcend')} 파편 베이스의 지수가 ${x}만큼 증가합니다.`,
        x => `${toTextStyle('초월','transcend')} 파편 베이스의 지수가 ${x}만큼 증가합니다.`,
        x => `${toTextStyle('초월','transcend')} 파편 베이스의 지수가 ${x}만큼 증가합니다.`,
    ],[
        x => `${toTextStyle('언데드 정수','undead')} 포획 확률 100%의 세제곱근마다 ${toTextStyle('언데드 정수','undead')}가 ${x[0]}배 증가합니다. (현재 ${x[1]})`,
        x => `이 동위원소 하나당 첫 번째 동위원소의 베이스가 ${x[0]}만큼 증가합니다. (현재 ${x[1]})`,
        x => `첫 번째 동위원소의 지수가 ${x}로 증가합니다.`,
        x => `첫 번째 동위원소의 지수가 ${x}로 증가합니다.`,
    ],[
        x => '납-207이 두 배 강해집니다.',
        x => '비스무트-211의 세 번째 효과 소프트캡이 약해집니다.',
        x => `폴로늄-215가 매우 감소된 비율로 '언데드 수확량'에 영향을 줍니다. (현재 ${x})`,
        x => '아스타틴-219의 두 번째 효과가 강해집니다.',
    ],[
        x => `납-211이 ${x}만큼 강해집니다.`,
        x => `납-211이 ${x}만큼 강해집니다.`,
        x => `납-211이 ${x}만큼 강해집니다.`,
        x => `납-211이 ${x}만큼 강해집니다.`,
        x => `납-211이 ${x}만큼 강해집니다.`,
    ],[
        x => `응축된 ${toTextStyle('초월','transcend')} 파편 부스트의 지수가 ${x}만큼 증가합니다.`,
        x => `응축된 ${toTextStyle('초월','transcend')} 파편 부스트의 지수가 ${x}만큼 증가합니다.`,
        x => `응축된 ${toTextStyle('초월','transcend')} 파편 부스트의 지수가 ${x}만큼 증가합니다.`,
        x => `응축된 ${toTextStyle('초월','transcend')} 파편 부스트의 지수가 ${x}만큼 증가합니다.`,
        x => `응축된 ${toTextStyle('초월','transcend')} 파편 부스트의 지수가 ${x}만큼 증가합니다.`,
    ],
]

Object.assign(KO, {
    runes: {
        fehu: ['페후', `${toTextStyle('물고기 반물질','antimatter')} 보유량을 기준으로 지수를 거듭제곱합니다.`, x => `${toTextStyle('물고기 반물질','antimatter')} 지수가 ${x}만큼 거듭제곱됩니다.`],
        berkanan: ['베르카난', `${toTextStyle('초월','transcend')} 파편 보유량을 기준으로 지수를 거듭제곱합니다.`, x => `${toTextStyle('초월','transcend')} 파편 지수가 ${x}만큼 거듭제곱됩니다.`],
        kaunan: ['카우난', `${toTextStyle('언데드 정수','undead')} 보유량을 기준으로 거듭제곱합니다.`, x => `${toTextStyle('언데드 정수','undead')}가 ${x}만큼 거듭제곱됩니다.`],
        naudiz: ['나우디즈', `${toTextStyle('원자핵','atom')} 보유량을 기준으로 거듭제곱합니다.`, x => `${toTextStyle('원자핵','atom')}이 ${x}만큼 거듭제곱됩니다.`],
        uruz: ['우루즈', `인접한 우루즈 이외의 ${toTextStyle('룬','rune')}을 강화합니다.`, x => `인접한 우루즈 이외의 ${toTextStyle('룬','rune')}이 ${x}만큼 강해집니다.`],
    },
    'short-rune-essence': '룬 정수',
    'rune-upgrades': [
        x => `페후 ${toTextStyle('룬','rune')}이 ${x}만큼 강해집니다.`,
        x => `베르카난과 카우난 ${toTextStyle('룬','rune')}이 ${x}만큼 강해집니다.`,
        x => `나우디즈 ${toTextStyle('룬','rune')}이 ${x}만큼 강해집니다.`,
        x => `${toTextStyle('룬','rune')} 정수를 ${x}만큼 추가합니다.`,
    ],
    'rune-clear-all': `모든 ${toTextStyle('룬','rune')} 제거`,
    'rune-erase-mode': bool => bool ? '지우기 취소' : '지우기 모드',
    'rune-sacrificed': '희생됨',
    'rune-sacrifice': [
        ['희생 티어 I', [
            `페후 ${toTextStyle('룬','rune')}이 효과를 내지 않습니다.`,
            `'언데드 물고기' ${toTextStyle('언데드','undead')} 업그레이드, 바륨-141, 탈륨-207, 프랑슘-223이 효과를 내지 않습니다.`,
        ], `페후 ${toTextStyle('룬','rune')}을 완전히 희생합니다.`],
        ['희생 티어 II', [
            `베르카난 ${toTextStyle('룬','rune')}이 효과를 내지 않습니다.`,
            `'언데드 환생' ${toTextStyle('언데드','undead')} 업그레이드, 크립톤-92, 폴로늄-211, 토륨-227, 응축된 ${toTextStyle('초월','transcend')} 파편이 효과를 내지 않습니다.`,
            `${toTextStyle('초월','transcend')} 파편이 로그 수준으로 감소합니다.`,
        ], `베르카난 ${toTextStyle('룬','rune')}을 완전히 희생합니다.`],
        ['희생 티어 III', [
            `카우난 ${toTextStyle('룬','rune')}이 효과를 내지 않습니다.`,
            `'언데드 확률', '언데드 반물질', '언데드 초월' 업그레이드와 헬륨-3, 탄소-11, 라돈-219, 응축된 ${toTextStyle('언데드 정수','undead')}가 효과를 내지 않습니다.`,
        ], `카우난 ${toTextStyle('룬','rune')}을 완전히 희생합니다.`],
    ],
    'rune-sacrifice-state': [
        `이 ${toTextStyle('룬','rune')}의 희생을 시작합니다.`,
        `이 ${toTextStyle('룬','rune')}의 희생을 취소합니다.`,
        `이 ${toTextStyle('룬','rune')}의 희생을 완료합니다.`,
    ],
})
