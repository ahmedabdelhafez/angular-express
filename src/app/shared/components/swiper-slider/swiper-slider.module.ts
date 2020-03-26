import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwiperSliderComponent } from "./swiper-slider.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SwiperSliderComponent],
  exports: [SwiperSliderComponent]
})
export class SwiperSliderModule {}
