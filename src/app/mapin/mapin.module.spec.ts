import { MapinModule } from './mapin.module';

describe('MapinModule', () => {
  let mapinModule: MapinModule;

  beforeEach(() => {
    mapinModule = new MapinModule();
  });

  it('should create an instance', () => {
    expect(mapinModule).toBeTruthy();
  });
});
