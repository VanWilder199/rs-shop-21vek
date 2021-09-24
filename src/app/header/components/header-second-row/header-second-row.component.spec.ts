import {HeaderSecondRowComponent} from "./header-second-row.component";

describe('PopularItemsComponent', () => {
  let component: HeaderSecondRowComponent;


  beforeEach(async () => {
   component = new HeaderSecondRowComponent();
  });

  it('check click true', () => {
    expect(component.onClick(false)).toBe(true)
  })
  it('check click false', () => {
    expect(component.onClick(true)).toBe(false)
  })

});
