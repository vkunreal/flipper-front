import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../ui/Text";

const meta = {
  title: "Shared/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tag: "p",
    children:
      "Обновить серверное программное обеспечение до последней версии для повышения безопасности и производительности системы. Это важный шаг для обеспечения стабильности.",
    maxLetters: 50,
    showMoreBtn: true,
  },
};
