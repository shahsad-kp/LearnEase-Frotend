import {ClassRoomBody, NavBar} from "../../components/";
import {Outlet, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {joinClassRoom, leaveClassRoom} from "../../redux/classRoomSlice/classRoomSlice.js";


export const RoomPage = () => {
    const classRoom = useSelector(state => state.classRoom.classRoom);
    const dispatcher = useDispatch()
    const {roomId} = useParams();

    useEffect(() => {
        // TODO: Join classroom
        const room = {
            id: roomId,
            name: 'History 101',
            topics: null,
            documents: null,
            messages: null,
            activities: null,
            grades: null,
            students: [
                {
                    "id": 1,
                    "name": "Emma Smith",
                    "profilePicture": "https://example.com/profiles/1.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": true
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 2,
                    "name": "Liam Johnson",
                    "profilePicture": "https://example.com/profiles/2.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": false,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 3,
                    "name": "Olivia Brown",
                    "profilePicture": "https://example.com/profiles/3.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": false,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 20,
                        passedActivities: 5,
                        totalPoints: 14,
                    }
                },
                {
                    "id": 4,
                    "name": "Noah Davis",
                    "profilePicture": "https://example.com/profiles/4.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": false,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 5,
                    "name": "Sophia Wilson",
                    "profilePicture": "https://example.com/profiles/5.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": false,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 6,
                    "name": "Jackson Taylor",
                    "profilePicture": "https://example.com/profiles/6.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 7,
                    "name": "Ava Anderson",
                    "profilePicture": "https://example.com/profiles/7.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": false,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 8,
                    "name": "Lucas Martinez",
                    "profilePicture": "https://example.com/profiles/8.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": false,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 9,
                    "name": "Mia Thompson",
                    "profilePicture": "https://example.com/profiles/9.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 10,
                    "name": "Aiden Thomas",
                    "profilePicture": "https://example.com/profiles/10.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": false,
                            "enabled": false
                        },
                        "video": {
                            "permission": false,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": false,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": false,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 11,
                    "name": "Charlotte Clark",
                    "profilePicture": "https://example.com/profiles/11.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": false,
                            "enabled": false
                        },
                        "video": {
                            "permission": false,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": false,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": false,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 12,
                    "name": "Henry Lewis",
                    "profilePicture": "https://example.com/profiles/12.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 13,
                    "name": "Amelia Walker",
                    "profilePicture": "https://example.com/profiles/13.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 14,
                    "name": "Alexander Rodriguez",
                    "profilePicture": "https://example.com/profiles/14.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": false,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 15,
                    "name": "Harper Perez",
                    "profilePicture": "https://example.com/profiles/15.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": false,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 16,
                    "name": "Daniel Hall",
                    "profilePicture": "https://example.com/profiles/16.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": false,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 17,
                    "name": "Emily Young",
                    "profilePicture": "https://example.com/profiles/17.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": false,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 18,
                    "name": "Sebastian Hernandez",
                    "profilePicture": "https://example.com/profiles/18.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": false,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 19,
                    "name": "Elizabeth King",
                    "profilePicture": "https://example.com/profiles/19.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": false,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 20,
                    "name": "Benjamin Scott",
                    "profilePicture": "https://example.com/profiles/20.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 21,
                    "name": "Victoria Green",
                    "profilePicture": "https://example.com/profiles/21.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 22,
                    "name": "Joseph Adams",
                    "profilePicture": "https://example.com/profiles/22.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": true
                        },
                        "video": {
                            "permission": false,
                            "enabled": true
                        },
                        "whiteBoard": {
                            "permission": false,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": false,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 23,
                    "name": "Penelope Baker",
                    "profilePicture": "https://example.com/profiles/23.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": false,
                            "enabled": false
                        },
                        "video": {
                            "permission": false,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": false,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": false,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 24,
                    "name": "Levi Turner",
                    "profilePicture": "https://example.com/profiles/24.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                },
                {
                    "id": 25,
                    "name": "Olivia Powell",
                    "profilePicture": "https://example.com/profiles/25.jpg",
                    "isSelf": false,
                    "settings": {
                        "audio": {
                            "permission": true,
                            "enabled": false
                        },
                        "video": {
                            "permission": true,
                            "enabled": false
                        },
                        "whiteBoard": {
                            "permission": true,
                            "enabled": false
                        },
                        "screenShare": {
                            "permission": true,
                            "enabled": false
                        }
                    },
                    "grades": {
                        totalActivities: 11,
                        passedActivities: 11,
                        totalPoints: 50
                    }
                }
            ],
            lecturer: {
                id: 1,
                name: 'Lecturer 1',
                profilePicture: 'https://picsum.photos/200/300',
                isSelf: true,
                settings: {
                    audio: true,
                    video: true,
                    whiteBoard: true,
                    screenShare: false,
                }
            },
            isLecturer: true,
            selectedTopic: null,
        };

        if (!(classRoom && (classRoom.id === room.id))) {
            dispatcher(joinClassRoom(room));
        }
        document.title = room.name;
        return () => {
            dispatcher(leaveClassRoom())
        }

    }, []);

    return (
        <section className={'h-screen w-screen flex flex-col bg-primary'}>
            <NavBar navLinks={true}/>
            <ClassRoomBody>
                <Outlet/>
            </ClassRoomBody>
        </section>
    )
}