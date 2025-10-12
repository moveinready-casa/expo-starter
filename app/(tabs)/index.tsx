import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "@/lib/utils/theme";
import { Link, Stack } from "expo-router";
import { Alert, ScrollView, Text, View } from "react-native";

export default function Index() {
  const theme = useTheme();

  const resetProject = async () => {
    Alert.alert(
      "Reset Project",
      "Please confirm in the terminal (you have 30 seconds)"
    );
    const response = await fetch("/reset", {
      method: "DELETE",
    });

    if (response.status === 400) {
      Alert.alert("Reset Project", "Reset cancelled");
    }
  };
  const updateComponents = async () => {
    Alert.alert(
      "Update Components",
      "Please confirm in the terminal (you have 30 seconds)"
    );
    const response = await fetch("/update", {
      method: "PUT",
    });

    if (response.status === 400) {
      Alert.alert("Update Components", "Update cancelled");
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Home",
          headerStyle: { backgroundColor: theme.background },
          headerTitleStyle: { color: theme.foreground },
        }}
      />
      <ScrollView className="dark">
        <View className="bg-background">
          <View className="m-2">
            <Text className="text-5xl font-extrabold text-foreground">
              Welcome to the Expo Starter!
            </Text>
            <View>
              <Text className="text-lg text-muted-foreground">
                Jump in and preview components.
              </Text>
            </View>
          </View>
          <View className="m-2 flex-row gap-4">
            <Card className="w-[48%]">
              <CardHeader>
                <CardTitle>Reset Project</CardTitle>
                <CardDescription asChild>
                  <Text>
                    <Text className="font-bold">Important:</Text> This will
                    delete all the components as well as this screen.
                  </Text>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardAction>
                  <Button variant="destructive" onPress={() => resetProject()}>
                    Reset
                  </Button>
                </CardAction>
              </CardFooter>
            </Card>
            <Card className="w-[48%]">
              <CardHeader>
                <CardTitle>Update Components</CardTitle>
                <CardDescription>
                  Update components to the latest version on the registry.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardAction>
                  <Button
                    variant="destructive"
                    onPress={() => updateComponents()}
                  >
                    Update
                  </Button>
                </CardAction>
              </CardFooter>
            </Card>
          </View>
          <View className="m-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Find in-depth information about shadcn-native.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardAction>
                  <Button>
                    <Link href="https://shadcn-native.moveinready.casa/docs">
                      View Docs
                    </Link>
                  </Button>
                </CardAction>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Storybook</CardTitle>
                <CardDescription>
                  View the interactive UI components on the web.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardAction>
                  <Button>
                    <Link href="https://main--68af7af75f72e5521a7e0f93.chromatic.com/?path=/docs/welcome--docs">
                      View Docs
                    </Link>
                  </Button>
                </CardAction>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>GitHub</CardTitle>
                <CardDescription>
                  View the source code on GitHub.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardAction>
                  <Button>
                    <Link href="https://github.com/moveinready-casa/shadcn-native">
                      View GitHub
                    </Link>
                  </Button>
                </CardAction>
              </CardFooter>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
