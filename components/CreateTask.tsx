import React, { useEffect, useState } from "react"
import { Modal, Platform, View, TouchableOpacity, Pressable, Text, TextInput } from "react-native"
import { TabBarIcon } from "./TabBarIcon"
import Ionicons from "@expo/vector-icons/Ionicons"

interface CreateTaskProps {
  className?: string
  size?: number
}

export const CreateTask: React.FC<CreateTaskProps> = ({ size = 35, className }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [text, setText] = useState("")
  const inputRef = React.useRef<TextInput>(null)

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  // Focus on input when modal is opened to never miss keyboard opening
  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [modalVisible])

  return (
    <>
      <Pressable className={`${className}`} onPress={handleOpenModal}>
        <View className="rounded-full bg-black p-4 shadow-sm">
          <TabBarIcon name="add" color={"white"} size={size} />
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
        presentationStyle={Platform.OS === "ios" ? "pageSheet" : "fullScreen"}>
        <View style={{ flex: 1 }} className="m-2 flex flex-col gap-4">
          <View className="flex flex-row items-center justify-between p-2">
            <Text className="text-lg font-medium">Create Task</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible)
              }}>
              <Ionicons name="close" size={28} />
            </TouchableOpacity>
          </View>

          <TextInput
            ref={inputRef}
            className="h-10 w-full rounded-md p-2"
            placeholder="What would you like to do?"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />

          <View className="flex w-full flex-row items-center justify-between p-2">
            <Text className="text-blue-600">Today</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible)
                setText("")
              }}>
              <Ionicons name="arrow-up-circle-outline" size={32} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}
