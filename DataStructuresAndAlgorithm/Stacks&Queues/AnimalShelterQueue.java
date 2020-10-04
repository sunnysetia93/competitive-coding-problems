import java.util.*;

abstract class Animal {
    private int order;
    private String name;
    public Animal(String n){
        this.name=n;
    }
    public String getName(){
        return name;
    }
    public int getOrder(){
        return order;
    }
    public void setOrder(int o){
        order=o;
    }

    public boolean olderThan(Animal a){
        return this.order < a.order;
    }
}

class Dog extends Animal{
    public Dog(String n){
        super(n);
    }
}

class Cat extends Animal{
    public Cat(String n){
        super(n);
    }
}

class AnimalShelterQueue{
    private LinkedList<Dog> dogs = new LinkedList<Dog>();
    private LinkedList<Cat> cats = new LinkedList<Cat>();
    private int currentOrder = 0;

    public void enqueue(Animal a){
        a.setOrder(currentOrder);
        currentOrder++;

        if(a instanceof Dog)
            dogs.addLast((Dog)a);
        else
            cats.addLast((Cat)a);
    }

    public Animal dequeueDog(){
        return dogs.poll();
    }

    public Animal dequeueCat(){
        return cats.poll();
    }

    public Animal dequeueAny(){
        if(dogs.size()==0)
            return dequeueCat();
        if(cats.size()==0)
            return dequeueDog();
        
        Dog firstDog = dogs.peek();
        Cat firstCat = cats.peek();

        if(firstCat.olderThan(firstDog))
            return dequeueCat();
        else
            return dequeueDog();
    }

    public Animal peekDog(){
        return dogs.peek();
    }

    public Animal peekCat(){
        return cats.peek();
    }

    public static void main(String[] args){
        Dog dog1 = new Dog("brownie");
        Dog dog2 = new Dog("blush");
        Dog dog3 = new Dog("sam");

        Cat cat1 = new Cat("sam");
        Cat cat2 = new Cat("kim");

        AnimalShelterQueue animalQueue = new AnimalShelterQueue();

        animalQueue.enqueue(dog1);
        animalQueue.enqueue(cat1);
        animalQueue.enqueue(dog2);
        System.out.println(animalQueue.peekDog().getName());    //brownie
        System.out.println(animalQueue.peekCat().getName());    //sam

        animalQueue.dequeueAny();
        System.out.println(animalQueue.peekDog().getName());    //blush

    }

}

