import React, { Component } from 'react';
import SimpleSlider from './SimpleSlider';

class PortfolioModal extends Component {
 render() {
  return (
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                         
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">反正我很閒</h2>
                      
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>

                            <div>
                                <SimpleSlider/>
                            </div>
                            <br></br>
                            <p class="mb-4">
                            反正我很閒是一個臺灣的YouTube頻道，團隊由鍾佳播、陳奕凱及趙福臨組成。以喜劇的方式討論各種主題，含括了社會政治、哲學思考、男女情感、都市傳說等，其中以諷刺資本主義和反抗體制的左膠內容為最主要特色。鏡頭則是以嘲弄YouTuber慣用的跳接剪輯，刻意粗糙的影像，以及縮放鏡頭的手法呈現[1]。劇中創造了許多如「卑鄙源之助」、「惡魔貓男」、「台北暴徒」、「浪漫Duke」...等虛構人物和洗腦台詞在網路上蔚為流行。
                            </p>
                            <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                <i class="fas fa-times fa-fw"></i>
                                Close Window
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
 }
}

export default PortfolioModal;