// Modal.js
import React from "react";
import { Modal, TouchableOpacity, TextInput, Button, View } from "react-native";
import styles from "./ModalStyles";

const CustomModal = ({
    isVisible,
    closeModal,
    createTask,
    newTaskTitle,
    setNewTaskTitle,
}) => {
    return (
        <Modal
            visible={isVisible} // Propriété pour contrôler la visibilité de la fenêtre modale
            animationType="slide" // Type d'animation pour l'ouverture de la fenêtre modale
            transparent={true} // Définit si la fenêtre modale est transparente
            onRequestClose={closeModal} // Fonction appelée lorsque l'utilisateur ferme la fenêtre modale
        >
            {/* TouchableOpacity pour créer un fond semi-transparent lors de l'ouverture de la fenêtre modale */}
            <TouchableOpacity
                onPress={closeModal} // Appel de la fonction closeModal lorsque l'utilisateur appuie sur le fond
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond semi-transparent
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                }}
                activeOpacity={1}
            />
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {/* TextInput pour saisir le titre de la nouvelle tâche */}
                    <TextInput
                        style={styles.input}
                        placeholder="Une chose à faire ?" // Placeholder pour guider l'utilisateur
                        onChangeText={(text) => setNewTaskTitle(text)} // Fonction pour mettre à jour le titre de la nouvelle tâche
                        value={newTaskTitle} // Valeur du titre de la nouvelle tâche
                    />
                    {/* Bouton pour ajouter la nouvelle tâche */}
                    <Button title="Ajouter" onPress={createTask} />
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
