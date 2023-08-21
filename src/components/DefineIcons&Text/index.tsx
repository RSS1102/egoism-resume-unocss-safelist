import TextSuInput from "@/components/TextSuInput";
import TableListIcons from "@/components/TableListIcons";
import { MPopover, MBorder } from "shuimo-ui";
import { defineComponent, h, ref } from "vue";

const DefineIconsText = defineComponent({
  name: "DefineIconsText",
  props: {
    iconSize: {
      type: Number,
      default: 6,
    },
    textWidth: {
      type: Number,
      default: 20,
    }

  },
  setup(props) {
    const iconName = ref("info");

    const chooseIcon = (icon: string) => iconName.value = icon;

    return () => (
      <>
        <div
          un-fic
          gap-2
        >
          <MPopover>
            {{
              default: () =>
                h("div", {
                  class: `i-fluent-mdl2:${iconName.value} text-6 w-6 h-6`,
                }),
              content: () => <MBorder> <TableListIcons onChooseIcon={chooseIcon} /></MBorder>,
            }}
          </MPopover>
          <TextSuInput />
        </div>
        <hr />
      </>
    );
  },
});

export default DefineIconsText;
