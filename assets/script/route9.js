const localeMap = {
  "ko": { "btnTxt":"🇰🇷 한국어"},
  "en": { "btnTxt":"🇺🇸 English"},
  "ja": { "btnTxt":"🇯🇵 日本語"},
}

function getLocale() {
    // 현재 URL의 쿼리 파라미터 가져오기
    let locale = "ko"
    let params = new URLSearchParams(window.location.search);
    // 특정 파라미터 값 조회 (예: ?locale=ko)
    let queryLocale = params.get("locale"); 
    if( queryLocale != null && queryLocale != locale && (queryLocale in localeMap) ) {
      locale = queryLocale
    }
    return locale
}

function initLocaleButton() {
  let ul = $($(".dropdown-locale > ul"))
  ul.empty()
  var baseUrl = window.location.origin + window.location.pathname;
  for(var localId in localeMap) {
    ul.append(`<li><a class="dropdown-item" href="${baseUrl}?locale=${localId}" data-value="${localId}">${localeMap[localId].btnTxt}</a></li>`)
  }
  // $('#dropdownMenuButton').text(localeMap[locale].btnTxt)
  $('#dropdownMenuButton').attr("data-value", locale)
}