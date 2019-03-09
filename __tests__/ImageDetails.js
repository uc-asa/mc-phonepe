// __tests__/ImageDetails.js
import React from 'react';
import ImageDetails, { ItemRow } from '../src/screens/ItemList';

import renderer from 'react-test-renderer';

describe('ItemRow of ImageDetails', () => {
  it('Return null if there is no data ', () => {
    const tree = renderer.create(<ItemRow/>).toJSON();
    expect(tree).toBe(null);
  });
  it('Return with node if data', () => {
    const data = { index: 'Id', value: '23456789'};
    const image = {'fixed_height_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200_s.gif','width':'224','height':'200'},'original_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy_s.gif','width':'245','height':'219'},'fixed_width':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w.gif','width':'200','height':'179','size':'1218257','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w.mp4','mp4_size':'66211','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w.webp','webp_size':'461392'},'fixed_height_small_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/100_s.gif','width':'112','height':'100'},'fixed_height_downsampled':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200_d.gif','width':'224','height':'200','size':'182662','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/200_d.webp','webp_size':'59958'},'preview':{'width':'194','height':'172','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-preview.mp4','mp4_size':'29567'},'fixed_height_small':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/100.gif','width':'112','height':'100','size':'400148','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/100.mp4','mp4_size':'30201','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/100.webp','webp_size':'182188'},'downsized_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy_s.gif','width':'245','height':'219'},'downsized':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.gif','width':'245','height':'219','size':'1877069'},'downsized_large':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.gif','width':'245','height':'219','size':'1877069'},'fixed_width_small_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/100w_s.gif','width':'100','height':'89'},'preview_webp':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-preview.webp','width':'144','height':'129','size':'49888'},'fixed_width_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w_s.gif','width':'200','height':'179'},'fixed_width_small':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/100w.gif','width':'100','height':'89','size':'321400','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/100w.mp4','mp4_size':'26196','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/100w.webp','webp_size':'153112'},'downsized_small':{'width':'244','height':'218','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-downsized-small.mp4','mp4_size':'100515'},'fixed_width_downsampled':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w_d.gif','width':'200','height':'179','size':'147498','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w_d.webp','webp_size':'51036'},'downsized_medium':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.gif','width':'245','height':'219','size':'1877069'},'original':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.gif','width':'245','height':'219','size':'1877069','frames':'55','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.mp4','mp4_size':'280314','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.webp','webp_size':'727680'},'fixed_height':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200.gif','width':'224','height':'200','size':'1512051','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/200.mp4','mp4_size':'71509','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/200.webp','webp_size':'540256'},'looping':{'mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-loop.mp4','mp4_size':'1238779'},'original_mp4':{'width':'480','height':'428','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.mp4','mp4_size':'280314'},'preview_gif':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-preview.gif','width':'95','height':'85','size':'49897'},'480w_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/480w_s.jpg','width':'480','height':'429'}};
    const tree = renderer.create(
      <ItemRow
        list = { data }
        images = { image }
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  }); 
});
describe('ImageDetails', () => {
  it('Render correctly', () => {
    const t = {'type':'gif','id':'rwNpHtaMGnStW','slug':'ryan-gosling-crazy-stupid-love-more-like-500k-wtf-rwNpHtaMGnStW','url':'https://giphy.com/gifs/ryan-gosling-crazy-stupid-love-more-like-500k-wtf-rwNpHtaMGnStW','bitly_gif_url':'https://gph.is/1qcYHb5','bitly_url':'https://gph.is/1qcYHb5','embed_url':'https://giphy.com/embed/rwNpHtaMGnStW','username':'','source':'https://c-mines.tumblr.com/post/55390116615','rating':'g','content_url':'','source_tld':'c-mines.tumblr.com','source_post_url':'https://c-mines.tumblr.com/post/55390116615','is_sticker':0,'import_datetime':'2013-07-14 03:05:00','trending_datetime':'2014-08-15 20:19:36','images':{'fixed_height_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200_s.gif','width':'224','height':'200'},'original_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy_s.gif','width':'245','height':'219'},'fixed_width':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w.gif','width':'200','height':'179','size':'1218257','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w.mp4','mp4_size':'66211','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w.webp','webp_size':'461392'},'fixed_height_small_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/100_s.gif','width':'112','height':'100'},'fixed_height_downsampled':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200_d.gif','width':'224','height':'200','size':'182662','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/200_d.webp','webp_size':'59958'},'preview':{'width':'194','height':'172','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-preview.mp4','mp4_size':'29567'},'fixed_height_small':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/100.gif','width':'112','height':'100','size':'400148','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/100.mp4','mp4_size':'30201','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/100.webp','webp_size':'182188'},'downsized_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy_s.gif','width':'245','height':'219'},'downsized':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.gif','width':'245','height':'219','size':'1877069'},'downsized_large':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.gif','width':'245','height':'219','size':'1877069'},'fixed_width_small_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/100w_s.gif','width':'100','height':'89'},'preview_webp':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-preview.webp','width':'144','height':'129','size':'49888'},'fixed_width_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w_s.gif','width':'200','height':'179'},'fixed_width_small':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/100w.gif','width':'100','height':'89','size':'321400','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/100w.mp4','mp4_size':'26196','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/100w.webp','webp_size':'153112'},'downsized_small':{'width':'244','height':'218','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-downsized-small.mp4','mp4_size':'100515'},'fixed_width_downsampled':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w_d.gif','width':'200','height':'179','size':'147498','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/200w_d.webp','webp_size':'51036'},'downsized_medium':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.gif','width':'245','height':'219','size':'1877069'},'original':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.gif','width':'245','height':'219','size':'1877069','frames':'55','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.mp4','mp4_size':'280314','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.webp','webp_size':'727680'},'fixed_height':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/200.gif','width':'224','height':'200','size':'1512051','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/200.mp4','mp4_size':'71509','webp':'https://media2.giphy.com/media/rwNpHtaMGnStW/200.webp','webp_size':'540256'},'looping':{'mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-loop.mp4','mp4_size':'1238779'},'original_mp4':{'width':'480','height':'428','mp4':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy.mp4','mp4_size':'280314'},'preview_gif':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/giphy-preview.gif','width':'95','height':'85','size':'49897'},'480w_still':{'url':'https://media2.giphy.com/media/rwNpHtaMGnStW/480w_s.jpg','width':'480','height':'429'}},'title':'ryan gosling GIF','_score':2500038,'analytics':{'onload':{'url':'https://giphy_analytics.giphy.com/simple_analytics?response_id=5c7fa0bc4331555349547ca1&event_type=GIF_SEARCH&gif_id=rwNpHtaMGnStW&action_type=SEEN'},'onclick':{'url':'https://giphy_analytics.giphy.com/simple_analytics?response_id=5c7fa0bc4331555349547ca1&event_type=GIF_SEARCH&gif_id=rwNpHtaMGnStW&action_type=CLICK'},'onsent':{'url':'https://giphy_analytics.giphy.com/simple_analytics?response_id=5c7fa0bc4331555349547ca1&event_type=GIF_SEARCH&gif_id=rwNpHtaMGnStW&action_type=SENT'}}};
    const props = {
      state: {
        params: {
          data: {...t},
        }
      }
    };
    const tree = renderer.create(<ImageDetails navigation={{...props}}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
