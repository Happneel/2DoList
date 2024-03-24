// App.js
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Alert,
    StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./components/Header/Header";
import Task from "./components/Task/Task";
import Footer from "./components/Footer/Footer";
import CustomModal from "./components/Modal/Modal";

export default function App() {
    const [tasksToDisplay, setTasksToDisplay] = useState([]);
    const [filterBarPosition, setFilterBarPosition] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [askIfSureRemove, setAskIfSureRemove] = useState(true);
    const [tasks, setTasks] = useState([]);

    // Fonction pour afficher les paramètres
    const showSettings = () => {
        Alert.alert(
            "Paramètres",
            null,
            [
                {
                    text: "Annuler",
                    style: "cancel",
                },
                {
                    text: "Supprimer toutes les tâches",
                    onPress: () => {
                        Alert.alert(
                            "Suppression",
                            "Etes-vous sûr de vouloir supprimer toutes les tâches ?",
                            [
                                {
                                    text: "Annuler",
                                    style: "cancel",
                                },
                                {
                                    text: "Supprimer",
                                    onPress: () => {
                                        setTasks([]);
                                    },
                                },
                            ]
                        );
                    },
                },
                {
                    text: "Demander avant de supprimer",
                    onPress: () => {
                        setAskIfSureRemove(true);
                    },
                },
            ],
            { cancelable: true }
        );
    };

    // Fonction pour modifier l'état d'une tâche
    const setTaskState = (id, state) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.state = state;
                }
                return task;
            })
        );
    };

    // Fonction pour filtrer les tâches selon leur état
    const filterTasks = (filter) => {
        switch (filter) {
            case "all":
                return tasks;
            case "in progress":
                return tasks.filter((task) => task.state === "in progress");
            case "todo":
                return tasks.filter((task) => task.state === "todo");
            case "done":
                return tasks.filter((task) => task.state === "done");
            default:
                return tasks;
        }
    };

    // Fonction pour créer une nouvelle tâche
    const createTask = () => {
        setModalVisible(false);

        if (newTaskTitle.trim()) {
            const newTask = {
                id: tasks.length + 1,
                title: newTaskTitle,
                state: "todo",
            };

            setTasks([...tasks, newTask]);
            setNewTaskTitle("");
        }
    };

    // Fonction pour supprimer une tâche
    const removeTask = (id) => {
        if (askIfSureRemove) {
            Alert.alert(
                "Suppression",
                "Etes-vous sûr de vouloir supprimer cette tâche ?",
                [
                    {
                        text: "Annuler",
                        style: "cancel",
                    },
                    {
                        text: "Supprimer",
                        onPress: () => {
                            setTasks(tasks.filter((task) => task.id !== id));
                        },
                    },
                    {
                        text: "Supprimer et ne plus demander",
                        onPress: () => {
                            setAskIfSureRemove(false);
                            setTasks(tasks.filter((task) => task.id !== id));
                        },
                    },
                ]
            );
        } else {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    // Fonction pour charger les tâches depuis le stockage local
    const loadTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem("tasks");
            const askIfSureRemove = await AsyncStorage.getItem("askIfSureRemove");

            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
            if (askIfSureRemove) {
                setAskIfSureRemove(JSON.parse(askIfSureRemove));
            }
        } catch (error) {
            console.error(
                "Error loading tasks/parameters from local storage:",
                error
            );
        }
    };

    // Fonction pour sauvegarder les tâches dans le stockage local
    const saveTasks = async () => {
        try {
            await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
            await AsyncStorage.setItem(
                "askIfSureRemove",
                JSON.stringify(askIfSureRemove)
            );
        } catch (error) {
            console.error("Error saving tasks/parameters to local storage:", error);
        }
    };

    // Effet pour charger les tâches lors du montage du composant
    useEffect(() => {
        loadTasks();
    }, []);

    // Effet pour sauvegarder les tâches à chaque modification
    useEffect(() => {
        saveTasks();
    }, [tasks]);

    // Effet pour mettre à jour les tâches affichées lorsque la position de la barre de filtre change
    useEffect(() => {
        if (filterBarPosition === 0) {
            setTasksToDisplay(tasks);
        }
    }, [tasks]);

    return (
        <View style={styles.container}>
            {/* Barre de statut */}
            <StatusBar barStyle="dark-content" />
            {/* En-tête */}
            <Header
                showSettings={showSettings}
                showModal={() => setModalVisible(true)}
            />
            {/* Corps */}
            <View style={styles.body}>
                <ScrollView>
                    {/* Boucle à travers les tâches et rendu des composants de tâche */}
                    {tasksToDisplay.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            setTaskState={setTaskState}
                            removeTask={removeTask}
                        />
                    ))}
                    {/* Affichage du message "Aucune tâche à afficher" si aucune tâche n'est affichée */}
                    {tasksToDisplay.length === 0 && (
                        <Text
                            style={{
                                textAlign: "center",
                                marginTop: "50%",
                                color: "grey",
                                fontSize: 20,
                            }}
                        >
                            Aucune tâche à afficher
                        </Text>
                    )}
                </ScrollView>
            </View>
            {/* Pied de page */}
            <Footer
                filterTasks={filterTasks}
                tasks={tasks}
                setTasksToDisplay={setTasksToDisplay}
                setFilterBarPosition={setFilterBarPosition}
                filterBarPosition={filterBarPosition}
            />
            {/* Modal pour créer une nouvelle tâche */}
            <CustomModal
                isVisible={isModalVisible}
                closeModal={() => setModalVisible(false)}
                createTask={createTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    body: {
        flex: 5,
        paddingBottom: 20,
    },
});
