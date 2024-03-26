import { Pressable, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/styles";
import { getFormatedDate } from "../../util/date";

function ExpenseItem({ description, date, amount }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("ManageExpense");
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: GlobalStyles.colors.primary100 }}
        onPress={expensePressHandler}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.expenseItem}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  outerContainer: {
    overflow: "hidden",
    flex: 1,
    borderRadius: 6,
    elevation: 3,
    marginVertical: 8,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
