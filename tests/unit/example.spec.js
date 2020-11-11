/* eslint-disable import/no-unresolved */
import { mount } from '@vue/test-utils';
import InputComponent from '@/components/InputComponent.vue';

describe('Testing Input Component', () => {
  // adding data to props
  const title = ['CEO', 'CTO', 'COO', 'CWO', 'Software Engineer'];
  const role = ['Read', 'Write', 'Delete'];
  const placeholder = 'Select Title...';

  it('added props data', () => {
    const wrapper = mount(InputComponent, {
      propsData: {
        titles: title,
        roles: role,
        placeholder,
      },
    });
    console.log(wrapper.html());
  });

  it('selecting CTO from options', () => {
    const wrapper = mount(InputComponent, {
      propsData: {
        titles: title,
        roles: role,
        placeholder,
      },
    });


    const titleValue = 'CTO';
    const selectElement = wrapper.find('select').find(`option[value="${titleValue}"]`);

    expect(selectElement.text()).toEqual(titleValue);
  });

  it('"write" is checked from the inputs type checkbox', async () => {
    const wrapper = mount(InputComponent, {
      propsData: {
        titles: title,
        roles: role,
        placeholder,
      },
    });

    const checkbox = wrapper.find('div').findAll('input[type="checkbox"]');
    checkbox.at(1).element.selected = true;
    checkbox.trigger('change');
    // console.log(checkbox.html());
    // await checkbox.at(2).element.checked;


    expect(checkbox.at(1)).toBe();
    // expect(checkbox.at(1)).toEqual(true);
  });

  it('emitting...', async () => {
    const wrapper = mount(InputComponent, {
      propsData: {
        titles: title,
        roles: role,
        placeholder,
      },
      setData: {
        title: 'CEO', role: ['Write'],
      },
    });


    // // await wrapper.find('button').trigger('click');
    // // await select1.trigger('change');

    // expect(selectElement.text()).toEqual(titleValue);
    // expect(checkbox.at(1)).toBeTruthy();


    wrapper.vm.handleClick();
    console.log(wrapper.emitted());
    // console.log(wrapper.html());
    // await wrapper.find('form').trigger('submit.prevent');
  });
});
