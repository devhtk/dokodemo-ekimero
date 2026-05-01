import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// JR東日本 lines
const jrEastLines = [
  '上越線',
  '両毛線',
  '中央・総武線各駅停車',
  '中央本線',
  '中央本線（辰野支線）',
  '中央線快速',
  '五日市線',
  '京浜東北線',
  '京葉線',
  '伊東線',
  '信越本線',
  '内房線',
  '吾妻線',
  '埼京線',
  '外房線',
  '大糸線',
  '宇都宮線',
  '山手線',
  '川越線',
  '常磐線',
  '常磐線快速',
  '御殿場線',
  '成田線',
  '東海道線',
  '東金線',
  '根岸線',
  '横浜線',
  '横須賀線',
  '武蔵野線',
  '水戸線',
  '水郡線',
  '湘南新宿ライン',
  '特急用ホーム',
  '磐越東線',
  '篠ノ井線',
  '総武快速線',
  '総武本線',
  '青梅線',
  '飯山線',
  '飯田線',
  '高崎線',
  '鶴見線',
  '鹿島線',
];

// Tokyo Metro lines
const tokyoMetroLines = [
  '丸ノ内線',
  '副都心線',
  '千代田線',
  '半蔵門線',
  '南北線',
  '日比谷線',
  '有楽町線',
  '東西線',
  '銀座線',
];

// Toei lines
const toeiLines = [
  '三田線',
  '大江戸線',
  '新宿線',
  '浅草線',
];

// Build JR East line redirects
const jrEastRedirects = {};
for (const line of jrEastLines) {
  jrEastRedirects[`/jr-east/${line}.html`] = `/lines/${line}`;
}

// Build Tokyo Metro line redirects
const tokyoMetroRedirects = {};
for (const line of tokyoMetroLines) {
  tokyoMetroRedirects[`/tokyo-metro/${line}.html`] = `/lines/${line}`;
}

// Build Toei line redirects
const toeiRedirects = {};
for (const line of toeiLines) {
  toeiRedirects[`/toei/${line}.html`] = `/lines/${line}`;
}

export default defineConfig({
  site: 'https://ekimero.com',
  base: '/',
  integrations: [sitemap()],
  redirects: {
    '/stations/:name.html': '/stations/:name',
    '/lines/:name.html': '/lines/:name',
    '/melodies/:name.html': '/melodies/:name',
    '/companies/:name.html': '/companies/:name',
    '/unused/:name.html': '/unused/:name',
    '/station/:name.html': '/stations/:name',
    '/line/:name.html': '/lines/:name',
    '/melody/:name.html': '/melodies/:name',
    '/company/:name.html': '/companies/:name',
    '/未使用/:name.html': '/unused/:name',
    '/credits.html': '/credits',
    '/history.html': '/history',
    '/search.html': '/search',
    '/stations.html': '/stations',
    '/lines.html': '/lines',
    '/melodies.html': '/melodies',
    '/companies.html': '/companies',
    '/unused.html': '/unused',
    '/未使用.html': '/unused',
    ...jrEastRedirects,
    ...tokyoMetroRedirects,
    ...toeiRedirects,
    '/jr-east/:name.html': '/lines/:name',
    '/tokyo-metro/:name.html': '/lines/:name',
    '/toei/:name.html': '/lines/:name',
    '/jr-east.html': '/companies/JR東日本',
    '/tokyo-metro.html': '/companies/東京メトロ',
    '/toei.html': '/companies/都営地下鉄',
  },
});
