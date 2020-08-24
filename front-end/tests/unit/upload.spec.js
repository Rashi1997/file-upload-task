import { shallowMount } from '@vue/test-utils';
import Upload from '@/components/Upload.vue';

describe('d-button.vue', () => {
    it('disables button when data.disabled is passed', () => {
      const wrapper = shallowMount(Upload, {
        mocks: {
          $store: {
            state: {
              data: {
                  disabled: true
              }
            }
          }
        }
      });
      expect(wrapper.find('.button').attributes().disabled).toBe('disabled');
    });

    it('upload button can be clicked', () => {
        const wrapper = shallowMount(Upload, {
            mocks: {
                $store: {
                  state: {
                    data: {
                        disabled: true
                    }
                  }
                }
            }
        });
        wrapper.find('.button').trigger('click');
      });

      it('file upload input form element present', () => {
        const wrapper = shallowMount(Upload, {
            mocks: {
                $store: {
                  state: {
                    data: {
                        disabled: true
                    }
                  }
                }
            }
        });
        expect(wrapper.find('#fileUpload')).not.toBe(null);
      });

      it('file upload input form element type check', () => {
        const wrapper = shallowMount(Upload, {
            mocks: {
                $store: {
                  state: {
                    data: {
                        disabled: true
                    }
                  }
                }
            }
        });
        expect(wrapper.find('#fileUpload').attributes().type).toBe('file');
        expect(wrapper.find('#fileUpload').attributes().display).toBe(undefined);
      });

      it('file upload input form element hidden', () => {
        const wrapper = shallowMount(Upload, {
            mocks: {
                $store: {
                  state: {
                    data: {
                        disabled: true
                    }
                  }
                }
            }
        });
        expect(wrapper.find('#fileUpload').attributes().display).toBe(undefined);
      })
});

