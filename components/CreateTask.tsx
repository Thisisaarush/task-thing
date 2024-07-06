import React, { useState } from "react"
import { Modal, Platform, View, TouchableOpacity, Pressable, Text } from "react-native"
import { TabBarIcon } from "./TabBarIcon"
import Ionicons from "@expo/vector-icons/Ionicons"

interface CreateTaskProps {
  className?: string
  size?: number
}

export const CreateTask: React.FC<CreateTaskProps> = ({ size = 35, className }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleOpenModal = () => {
    setModalVisible(true)
  }

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
        <View className="m-2">
          <View className="flex flex-row items-center justify-between p-2">
            <Text className="text-lg font-medium">Create Task</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible)
              }}>
              <Ionicons name="close" size={28} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}
