import React, { useState } from "react";
import { View, Button, Text, TextInput } from "react-native";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <View>
      <View>
        <Button title="불러오기" onPress={onClick} />
      </View>
      {data && (
        <TextInput
          multiline
          numberOfLines={7}
          value={JSON.stringify(data, null, 2)}
          editable={false}
        />
      )}
    </View>
  );
};

export default Axios;