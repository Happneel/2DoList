// Task.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import checkIcon from "../../assets/check.png";
import inProgress from "../../assets/in-progress.png";
import styles from "./TaskStyles";

const Task = ({ task, setTaskState, removeTask }) => {
    return (
        <TouchableOpacity
            style={[
                styles.taskButton,
                {
                    backgroundColor: task.state === "in progress" ? "orange" : "white", // Changer la couleur de fond en fonction de l'état de la tâche
                },
            ]}
            onPress={
                () =>
                    setTaskState(
                        task.id,
                        task.state === "done"
                            ? "todo"
                            : task.state === "todo"
                                ? "in progress"
                                : "done"
                    ) // Changer l'état de la tâche lorsqu'elle est cliquée
            }
            onLongPress={() => {
                removeTask(task.id); // Supprimer la tâche lorsque l'utilisateur effectue un appui long sur celle-ci
            }}
        >
            {/* Vue représentant la tâche */}
            <View key={task.id} style={styles.task}>
                {/* Affichage conditionnel du titre de la tâche */}
                {task.state === "done" && (
                    <Text
                        style={[
                            styles.taskTitle,
                            {
                                textDecorationLine: "line-through", // Barre de texte barré pour les tâches terminées
                                color: "lightgrey", // Couleur grise pour les tâches terminées
                                fontStyle: "italic", // Texte en italique pour les tâches terminées
                            },
                        ]}
                    >
                        {task.title}
                    </Text>
                )}
                {task.state !== "done" && task.state !== "in progress" && (
                    <Text style={styles.taskTitle}>{task.title}</Text>
                )}
                {task.state === "in progress" && (
                    <Text style={[styles.taskTitle, { color: "white" }]}>
                        {task.title}
                    </Text>
                )}
                {/* Affichage conditionnel de l'icône de validation */}
                {task.state === "done" && (
                    <Image style={styles.checkIcon} source={checkIcon} />
                )}
                {/* Affichage conditionnel de l'icône de progression */}
                {task.state === "in progress" && (
                    <Image style={styles.checkIcon} source={inProgress} />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default Task;
